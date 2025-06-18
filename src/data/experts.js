import { fetchExpertsFromTrelloList } from '../utils/trelloApi';

// Fallback data in case Trello API is not configured
export const staticExpertsData = {
    experts: [
        // Each expert's avatar path is relative to the src/imgs directory
        // These will be dynamically imported in the ExpertCard component
        {
            id: 1,
            name: "Laura Holton",
            title: "Laura Holton",
            status: "Europe",
            description: "Consulting, Power-Up Specific Training, Courses/Tutorials, Training/Corporate Workshops.",
            rating: 5.0,
            reviews: 200,
            tags: ["Automation", "Zaps", "Integration"],
            avatar: "laura",
            location: "Europe",
            contact: "mailto:laura.s.holton@mac.com"
        }
    ]
};

// Function to get experts data from Trello
export const getExpertsData = async (listId) => {
    try {
        const experts = await fetchExpertsFromTrelloList(listId);
        return { experts };
    } catch (error) {
        console.warn('Failed to fetch Trello data, using static data:', error);
        return staticExpertsData;
    }
};

// For backwards compatibility
export const expertsData = staticExpertsData;
