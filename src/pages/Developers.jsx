import { Link } from 'react-router-dom'

function Developers() {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <h1>You Built It. We’ll Help It Take Off.</h1>
                    <p>You’ve nailed the dev work. Now let’s grow your user base, refine your roadmap, and turn your Power-Up into a thriving product—with strategy, content, user insights, and more.</p>
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
                            <h3>Strategy</h3>
                            <h4>Build the right features.</h4>
                            <p>We help you shape your roadmap with input from real users, market trends, and proven product practices—so you’re not just building, you’re building what matters.</p>
                        </div>
                        <div className="journey-card">
                            <div className="journey-icon">🛠️</div>
                            <h3>Growth</h3>
                            <h4>Get your Power-Up in front of the right users.</h4>
                            <p>From referral programs to SEO to partnerships, we’ll craft and implement a growth plan that makes adoption feel effortless (for you and your users).</p>
                        </div>
                        <div className="journey-card">
                            <div className="journey-icon">🧪</div>
                            <h3>Activation</h3>
                            <h4>Turn new users into loyal fans.</h4>
                            <p>We’ll help you optimize onboarding, improve UX, and create a smooth experience that keeps users coming back—and telling their teams.</p>
                        </div>
                        <div className="journey-card">
                            <div className="journey-icon">🚀</div>
                            <h3>Showcase</h3>
                            <h4>Show what your Power-Up can do.</h4>
                            <p>You don’t need to be a marketer to get your message across. We’ll create content, videos, and tutorials that highlight your Power-Up’s value and drive action.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dev-resources-section">
                <div className="section-content">
                    <h2>Services Designed for Power-Up Builders</h2>
                    <div className="resources-grid">
                        <div className="resource-card">
                            <h3>Growth & Content Program</h3>
                            <p>Work with a results-based senior marketing team
                                focused on moving MRR.
                                Our approach is tailored to the specific needs of a Power-up,
                                drawing on the proven playbook we've developed.</p>
                            <a href="https://developer.atlassian.com/cloud/trello/" className="resource-link" target="_blank" rel="noopener noreferrer">
                                Chat with a Growth Specialist →
                            </a>
                        </div>
                        <div className="resource-card">
                            <h3>Content Creation</h3>
                            <p>We’ll create tutorials, videos, guides, and shareable content that clearly show how your Power-Up works—so your value shines through without a pitch. Share on your channels or use our creators.</p>
                            <a href="https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/" className="resource-link" target="_blank" rel="noopener noreferrer">
                                Request Content →
                            </a>
                        </div>
                        <div className="resource-card">
                            <h3>Rate My Product</h3>
                            <p>Get the unbiased feedback you need to refine your Power-Up. We’ll analyze your Power-Up through a product lens—UX, feature set, value prop—and provide actionable feedback from a product + marketing perspective. </p>
                            <a href="https://community.atlassian.com/t5/Trello/ct-p/trello" className="resource-link" target="_blank" rel="noopener noreferrer">
                                Submit Your Power-Up →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dev-promotion-section">
                <div className="section-content">
                    <h2>Grow With Momentum</h2>
                    <div className="promotion-content">
                        <div className="promotion-text">
                            <p>Once your Power-Up is live, instead of crickets, you can tap into the millions of Trello users looking for solutions to their workflow problems every day.</p>
                            <ul className="promotion-list">
                                <li>Personalized growth and onboarding strategy tailored to your Power-Up.</li>
                                <li>Access to real user feedback to guide your roadmap and UX</li>
                                <li>Support creating demos, tutorials, and marketing content that converts</li>
                                <li>Help setting up monetization and pricing that makes sense for your product</li>
                                <li>Opportunities to be featured in user channels</li>
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
