import { useState, useMemo } from 'react'
import ProductCard from './components/ProductCard.jsx'
import TestimonialCard from './components/TestimonialCard.jsx'
import TagFilter from './components/TagFilter.jsx'
import SearchBar from './components/SearchBar.jsx'
import './App.css'
import productsData from './data/products.json'
import testimonialsData from './data/testimonials.json'

// Import images
import annual from './imgs/annual.png'
import family from './imgs/family.png'
import moving from './imgs/moving.png'
import britt from './imgs/britt.jpg'

// Image mapping
const images = {
  annual,
  family,
  moving,
  britt
}

function App() {
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
      <section className="hero">
        <div className="hero-content">
          <h1>Stop Winging It. Start With a Proven Trello System.</h1>
          <p>Why build from scratch when you can plug into a system that already works? With over a decade of experience using Trello for everything from team ops to personal projects, I’ve created templates that help real people get organized fast—and stay that way.</p>
          {/* <button className="cta-button">Explore templates</button> */}
        </div>
      </section>
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

      <section className="testimonials-section">
        <div className="testimonials-grid">
          {testimonialsData.testimonials.map(testimonial => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              avatar={images[testimonial.avatar]}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default App
