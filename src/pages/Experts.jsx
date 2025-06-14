import { useState, useMemo } from 'react'
import { expertsData } from '../data/experts'
import ExpertCard from '../components/ExpertCard'

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
    const [selectedTags, setSelectedTags] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    // Get unique tags from all experts
    const allTags = useMemo(() => {
        const tagSet = new Set()
        expertsData.experts.forEach(expert => {
            expert.tags?.forEach(tag => tagSet.add(tag))
        })
        return Array.from(tagSet).sort()
    }, [])

    // Filter experts based on selected tags and search query
    const filteredExperts = useMemo(() => {
        return expertsData.experts.filter(expert => {
            const matchesTags = selectedTags.length === 0 || expert.tags?.some(tag => selectedTags.includes(tag))
            const matchesSearch = searchQuery === '' ||
                expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                expert.description.toLowerCase().includes(searchQuery.toLowerCase())
            return matchesTags && matchesSearch
        })
    }, [selectedTags, searchQuery])

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

            {/* <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search experts by name or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </div> */}

            {/* <div className="tag-filter">
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
            </div> */}

            <div className="experts-grid">
                {filteredExperts.map(expert => (
                    <ExpertCard key={expert.id} expert={expert} />
                ))}
            </div>
        </div>
    )
}

export default Experts
