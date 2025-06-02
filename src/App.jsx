import { useState } from 'react'
import ProductCard from './components/ProductCard.jsx'
import TestimonialCard from './components/TestimonialCard.jsx'
import './App.css'
import annual from './imgs/annual.png'
import family from './imgs/family.png'
import moving from './imgs/moving.png'
import britt from './imgs/britt.jpg'

function App() {
  const [count, setCount] = useState(0)

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
        <ProductCard
          image={annual}
          title="Sample Product"
          description="This is a sample product description."
          price={29.99}
          onButtonClick={() => window.open('https://trello.substack.com/', '_blank')}
        />
        <ProductCard
          image={family}
          title="Sample Product"
          description="This is a sample product description."
          price={29.99}
          onButtonClick={() => window.open('https://trello.substack.com/', '_blank')}
        />
        <ProductCard
          image={moving}
          title="Sample Product"
          description="This is a sample product description."
          price={29.99}
          onButtonClick={() => window.open('https://trello.substack.com/', '_blank')}
        />
      </div>

      <section className="testimonials-section">
        <div className="testimonials-grid">
          <TestimonialCard
            name="Sarah Johnson"
            role="Project Manager"
            quote="These Trello templates have completely transformed how our team manages projects. The pre-built structure saved us hours of setup time."
            avatar={britt}
          />
          <TestimonialCard
            name="Mike Chen"
            role="Small Business Owner"
            quote="I've tried many organization systems, but this Trello setup is by far the most intuitive and effective. It's helped me stay on top of everything."
            avatar={britt}
          />
          <TestimonialCard
            name="Emily Rodriguez"
            role="Freelance Designer"
            quote="The family organization template has been a game-changer for managing household tasks and schedules. My family is finally on the same page!"
            avatar={britt}
          />
        </div>
      </section>
    </>
  )
}

export default App
