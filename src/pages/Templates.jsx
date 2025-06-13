import { useState, useMemo } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import TagFilter from '../components/TagFilter.jsx'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
import '../App.css'
import productsData from '../data/products.json'
import testimonialsData from '../data/testimonials.json'

// Import images
import annual from '../imgs/annual.png'
import family from '../imgs/family.png'
import moving from '../imgs/moving.png'
import britt from '../imgs/britt.jpg'
import erika from '../imgs/erika.jpeg'
import meryl from '../imgs/meryl.jpeg'
import vy from '../imgs/vy.jpeg'

// Image mapping
const images = {
    annual,
    family,
    moving,
    britt,
    erika,
    meryl,
    vy
}

function Templates() {
    const [selectedTags, setSelectedTags] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    // Get unique tags from all products
    const allTags = useMemo(() => {
        const tagSet = new Set()
        productsData.products.forEach(product => {
            product.tags?.forEach(tag => tagSet.add(tag))
        })
        return Array.from(tagSet).sort()
    }, [])

    // Filter products based on selected tags and search query
    const filteredProducts = useMemo(() => {
        return productsData.products.filter(product => {
            const matchesTags = selectedTags.length === 0 || product.tags?.some(tag => selectedTags.includes(tag))
            const matchesSearch = searchQuery === '' || product.title.toLowerCase().includes(searchQuery.toLowerCase())
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
        <>
            <section className="product-section">
                <SearchBar
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                />
                <TagFilter
                    tags={allTags}
                    selectedTags={selectedTags}
                    onTagToggle={handleTagToggle}
                />
                <div className="product-list">
                    {filteredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            image={images[product.image]}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            onButtonClick={() => window.open(product.link, '_blank')}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Templates
