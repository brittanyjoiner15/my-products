import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Templates from './pages/Templates'
import Experts from './pages/Experts'
import Developers from './pages/Developers'
import AnimatedText from './components/AnimatedText'
import './App.css'
import britt from './imgs/britt.jpg'

function App() {
  const HomePage = () => (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Your Hub for Everything Trello</h1>
          <p>Whether you're a user looking for templates, a developer seeking support, or a brand exploring partnerships - find everything you need in one place.</p>
          <div className="hero-buttons">
            <Link to="/toolbox" className="cta-button">Explore Templates</Link>
            <Link to="/experts" className="cta-button cta-button-outline">Get an Expert</Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Products</h3>
            <p>Ready-to-use Trello templates and proven systems for teams, projects, and personal productivity.</p>
            <Link to="/toolbox" className="feature-link">Browse Templates →</Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Experts</h3>
            <p>From building your boards, to coaching your workflows, to training your teams, these experts offer personalized support on your Trello journey.</p>
            <Link to="/experts" className="feature-link">Get Dedicated Help →</Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Community</h3>
            <p>You built it, let's help them come. Get support plugging into a product with 1mm users.</p>
            <Link to="/developers" className="feature-link">Grow Your Power-Up →</Link>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="services-content">
          <h2>🚀 Get the <AnimatedText words={['Boost', 'Support', 'Training', 'Growth']} /> You Need</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>For Users</h3>
              <ul>
                <li>Ready-made templates</li>
                <li>Content & courses</li>
                <li>Consulting & training</li>
                <li>Custom solutions</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>For Developers</h3>
              <ul>
                <li>Market research</li>
                <li>Content creation</li>
                <li>Growth consulting</li>
                <li>Connect with users</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>For Experts</h3>
              <ul>
                <li>Client referrals</li>
                <li>Affiliate Programs</li>
                <li>Product Collabs</li>
                <li>Guest content</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <AboutMe image={britt} />
    </>
  )

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/toolbox" element={<Templates />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/developers" element={<Developers />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
