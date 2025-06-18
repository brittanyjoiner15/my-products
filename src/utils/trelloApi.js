// Trello API configuration
const TRELLO_API_KEY = import.meta.env.VITE_TRELLO_API_KEY;
const TRELLO_TOKEN = import.meta.env.VITE_TRELLO_TOKEN;
const TRELLO_API_BASE = 'https://api.trello.com/1';

/**
 * Fetches custom field definitions for a board
 * @param {string} boardId - The ID of the Trello board
 * @returns {Promise<Object>} Map of custom field names to their IDs
 */
const fetchCustomFields = async (boardId) => {
    const response = await fetch(
        `${TRELLO_API_BASE}/boards/${boardId}/customFields?key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`
    );

    if (!response.ok) {
        throw new Error('Failed to fetch custom fields');
    }

    const customFields = await response.json();

    // Create a map of field names to their IDs and types
    const fieldMap = customFields.reduce((acc, field) => {
        // Remove underscore prefix but preserve case
        const fieldName = field.name.replace(/^_/, '');
        console.log(`Field ${field.name} is of type ${field.type} with options:`, field.options);
        acc[fieldName] = {
            id: field.id,
            type: field.type,
            options: field.options
        };
        return acc;
    }, {});
    console.log('Complete field map:', fieldMap);
    return fieldMap;
};

/**
 * Gets the value of a custom field based on its type
 * @param {Object} field - The custom field data
 * @param {Object} fieldDef - The field definition including type
 * @returns {any} The formatted field value
 */
const getCustomFieldValue = async (field, fieldDef) => {
    if (!field) return null;

    switch (fieldDef.type) {
        case 'text':
            return field.value ? field.value.text : null;
        case 'number':
            return field.value ? field.value.number : null;
        case 'checkbox':
            return field.value ? field.value.checked : null;
        case 'list':
            if (!field.idValue) return null;
            try {
                const response = await fetch(
                    `${TRELLO_API_BASE}/customFields/${field.idCustomField}/options/${field.idValue}?key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`
                );
                if (!response.ok) return null;
                const option = await response.json();
                return option.value ? option.value.text : null;
            } catch (error) {
                console.error('Error fetching custom field option:', error);
                return null;
            }
        default:
            return null;
    }
};

/**
 * Fetches all cards from a specific Trello list
 * @param {string} listId - The ID of the Trello list to fetch cards from
 * @returns {Promise<Array>} Array of cards formatted for ExpertCard
 */
export const fetchExpertsFromTrelloList = async (listId) => {
    if (!TRELLO_API_KEY || !TRELLO_TOKEN) {
        throw new Error('Trello API credentials not configured');
    }

    try {
        // First, get the list to find its board ID
        const listResponse = await fetch(
            `${TRELLO_API_BASE}/lists/${listId}?key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}&fields=idBoard`
        );

        if (!listResponse.ok) {
            throw new Error('Failed to fetch list details');
        }

        const listData = await listResponse.json();
        const boardId = listData.idBoard;

        // Get custom fields definitions
        const customFieldsMap = await fetchCustomFields(boardId);

        // Get cards in the list
        const cardsResponse = await fetch(
            `${TRELLO_API_BASE}/lists/${listId}/cards?key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`
        );

        if (!cardsResponse.ok) {
            throw new Error('Failed to fetch Trello cards');
        }

        const cards = await cardsResponse.json();

        // Get custom field items for each card
        const cardsWithFields = await Promise.all(cards.map(async card => {
            const customFieldsResponse = await fetch(
                `${TRELLO_API_BASE}/cards/${card.id}/customFieldItems?key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`
            );
            const customFields = await customFieldsResponse.json();
            return { ...card, customFields };
        }));

        // Map Trello cards to expert format
        const formattedExperts = await Promise.all(cardsWithFields.map(async card => {
            // Create a map of custom field values
            console.log('Processing card:', card.name);
            console.log('Custom fields map:', customFieldsMap);
            console.log('Card custom fields:', card.customFields);

            const customFieldPromises = (card.customFields || []).map(async field => {
                console.log('Processing field:', field);
                const fieldDef = Object.values(customFieldsMap).find(def => def.id === field.idCustomField);
                console.log('Found field definition:', fieldDef);
                if (fieldDef) {
                    const fieldName = Object.keys(customFieldsMap).find(key => customFieldsMap[key].id === field.idCustomField);
                    console.log('Field name:', fieldName);
                    const value = await getCustomFieldValue(field, fieldDef);
                    console.log('Field value:', value);
                    return [fieldName, value];
                }
                return null;
            });

            const customFieldEntries = await Promise.all(customFieldPromises);
            const customFieldValues = Object.fromEntries(customFieldEntries.filter(entry => entry !== null));
            console.log('Final custom field values:', customFieldValues);

            return {
                id: card.id,
                name: card.name,
                title: customFieldValues.title || card.name,
                status: customFieldValues.status || "Accepting new clients",
                description: customFieldValues.description.length > 270 ? customFieldValues.description.substring(0, 267) + '...' : customFieldValues.description,
                rating: customFieldValues.rating || 5.0,
                reviews: customFieldValues.reviews || 0,
                tags: card.labels.map(label => label.name),
                avatar: customFieldValues.avatar || "default",
                location: customFieldValues.locationDropdown || "Unknown",
                contact: customFieldValues.contact || card.url
            };
        }));

        return formattedExperts;
    } catch (error) {
        console.error('Error fetching Trello cards:', error);
        throw error;
    }
};
