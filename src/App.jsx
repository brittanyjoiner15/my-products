import ProductCard from './components/ProductCard.jsx'
import TestimonialCard from './components/TestimonialCard.jsx'
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

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Stop Winging It. Start With a Proven Trello System.</h1>
          <p>Why build from scratch when you can plug into a system that already works? With over a decade of experience using Trello for everything from team ops to personal projects, I’ve created templates that help real people get organized fast—and stay that way.</p>
          {/* <button className="cta-button">Explore templates</button> */}
        </div>
      </section>
      <div className="product-list">
        {productsData.products.map(product => (
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
