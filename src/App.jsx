import { useState } from 'react'
import ProductCard from './components/ProductCard.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Amazing Products</h1>
          <p>Explore our curated collection of high-quality items selected just for you.</p>
          <button className="cta-button">Shop Now</button>
        </div>
      </section>
      <div className="product-list">
        <ProductCard
          image=""
          title="Sample Product"
          description="This is a sample product description."
          price={29.99}
          onButtonClick={() => window.open('https://trello.substack.com/', '_blank')}
        />
        <ProductCard
          image=""
          title="Sample Product"
          description="This is a sample product description."
          price={29.99}
          onButtonClick={() => window.open('https://trello.substack.com/', '_blank')}
        />
        <ProductCard
          image=""
          title="Sample Product"
          description="This is a sample product description."
          price={29.99}
          onButtonClick={() => window.open('https://trello.substack.com/', '_blank')}
        />
      </div>
    </>
  )
}

export default App
