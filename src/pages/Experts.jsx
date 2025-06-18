import { useState, useMemo, useEffect } from 'react'
import { getExpertsData } from '../data/experts'
import ExpertCard from '../components/ExpertCard'
import LoadingSpinner from '../components/LoadingSpinner'

// Import images
import laura from '../imgs/laura.png'
import mike from '../imgs/mike.png'
import alicia from '../imgs/alicia.png'

// Image mapping
const images = {
    laura,
    mike,
    alicia
}

function Experts() {
    const [experts, setExperts] = useState([])
    const [selectedTags, setSelectedTags] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadExperts = async () => {
            try {
                const data = await getExpertsData('6851e599db4e4c46de7b9e36');
                setExperts(data.experts);
            } catch (error) {
                console.error('Error loading experts:', error);
            } finally {
                setLoading(false);
            }
        };
        loadExperts();
    }, [])

    // Get unique tags from all experts
    const allTags = useMemo(() => {
        const tagSet = new Set()
        experts.forEach(expert => {
            if (expert.tags) {
                expert.tags.forEach(tag => tagSet.add(tag))
            } else {
                console.log('No tags found for expert:', expert.name);
            }
        })
        return Array.from(tagSet).sort();
    }, [experts])

    // Filter experts based on selected tags and search query
    const filteredExperts = useMemo(() => {
        return experts.filter(expert => {
            const matchesTags = selectedTags.length === 0 || expert.tags?.some(tag => selectedTags.includes(tag));
            const matchesSearch = searchQuery === '' ||
                expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                expert.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesTags && matchesSearch;
        });
    }, [experts, selectedTags, searchQuery])

    const handleTagToggle = (tag) => {
        setSelectedTags(prev =>
            prev.includes(tag)
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        )
    }

    return (
        <div className="experts-page">
            <section className="hero">
                <div className="hero-content">
                    <h1>Find Your Trello Expert</h1>
                    <p>Connect with certified Trello experts for personalized support, training, and solutions.</p>
                </div>
            </section>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search experts by name or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </div>

            <div className="tag-filter">
                <h2 className="tag-filter-title">Filter by expertise</h2>
                <div className="tag-filter-options">
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => handleTagToggle(tag)}
                            className={`tag-filter-button ${selectedTags.includes(tag) ? 'active' : ''}`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
            <div className="experts-grid">
                {loading ? (
                    <LoadingSpinner />
                ) : filteredExperts.length > 0 ? (
                    filteredExperts.map(expert => (
                        <ExpertCard key={expert.id} expert={expert} />
                    ))
                ) : (
                    <div>No experts found</div>
                )}
            </div>
            <div className="apply-expert-section">
                <button
                    className="apply-expert-button"
                    onClick={() => window.location.href = 'https://forms.bluecatreports.com/x0LpBArj/apply-to-be-an-expert'}
                >
                    Apply to be an expert
                </button>
            </div>
        </div>
    )
}

export default Experts
