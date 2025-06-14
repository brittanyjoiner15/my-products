import { NavLink, Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav className="main-nav">
            <div className="nav-container">
                <div className="nav-content">
                    <NavLink to="/" className="nav-brand">Trello Together</NavLink>
                    <ul className="nav-links">
                        {/* <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            >
                                Home
                            </NavLink>
                        </li> */}
                        <li>
                            <NavLink
                                to="/templates"
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            >
                                Templates
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
