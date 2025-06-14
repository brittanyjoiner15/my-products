import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <nav className="main-nav">
            <div className="nav-container">
                <div className="nav-content">
                    <NavLink to="/" className="nav-brand">Trello Together</NavLink>
                    <button 
                        className="hamburger-button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                    <ul className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
                        <li>
                            <NavLink
                                to="/templates"
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            >
                                Templates
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/experts"
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            >
                                Experts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/developers"
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            >
                                Developers
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
