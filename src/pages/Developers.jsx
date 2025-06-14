import { Link } from 'react-router-dom'

function Developers() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Build on Trello</h1>
          <p>Create powerful integrations and reach millions of Trello users. We'll help you every step of the way.</p>
          <div className="hero-buttons">
            <a href="https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/" className="cta-button" target="_blank" rel="noopener noreferrer">Get Started</a>
            <Link to="/templates" className="cta-button cta-button-outline">View Examples</Link>
          </div>
        </div>
      </section>

      <section className="dev-journey-section">
        <div className="section-content">
          <h2>Your Path to Success</h2>
          <div className="journey-grid">
            <div className="journey-card">
              <div className="journey-icon">💡</div>
              <h3>Ideate</h3>
              <p>Start with a problem you want to solve. Whether it's automation, visualization, or integration, there's a way to enhance Trello.</p>
            </div>
            <div className="journey-card">
              <div className="journey-icon">🛠️</div>
              <h3>Build</h3>
              <p>Use our comprehensive API documentation and SDKs to bring your idea to life. Get support from our developer community along the way.</p>
            </div>
            <div className="journey-card">
              <div className="journey-icon">🧪</div>
              <h3>Test</h3>
              <p>Validate your solution with real users. Our sandbox environment lets you test thoroughly before going live.</p>
            </div>
            <div className="journey-card">
              <div className="journey-icon">🚀</div>
              <h3>Launch</h3>
              <p>Submit your integration for review and prepare for launch. We'll help ensure everything meets our quality standards.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dev-resources-section">
        <div className="section-content">
          <h2>Developer Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>API Documentation</h3>
              <p>Comprehensive guides, references, and examples to help you integrate with Trello.</p>
              <a href="https://developer.atlassian.com/cloud/trello/" className="resource-link" target="_blank" rel="noopener noreferrer">
                Browse Docs →
              </a>
            </div>
            <div className="resource-card">
              <h3>SDKs & Tools</h3>
              <p>Official SDKs and community-built tools to accelerate your development.</p>
              <a href="https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/" className="resource-link" target="_blank" rel="noopener noreferrer">
                View SDKs →
              </a>
            </div>
            <div className="resource-card">
              <h3>Community Support</h3>
              <p>Connect with other developers and get help from our support team.</p>
              <a href="https://community.atlassian.com/t5/Trello/ct-p/trello" className="resource-link" target="_blank" rel="noopener noreferrer">
                Join Community →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="dev-promotion-section">
        <div className="section-content">
          <h2>Grow Your Integration</h2>
          <div className="promotion-content">
            <div className="promotion-text">
              <p>Once your integration is live, we'll help you reach Trello's millions of users through:</p>
              <ul className="promotion-list">
                <li>Featured placement in the Trello app directory</li>
                <li>Promotion in our developer newsletter</li>
                <li>Social media highlights</li>
                <li>Case study opportunities</li>
              </ul>
              <Link to="/templates" className="cta-button">View Success Stories</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Developers
