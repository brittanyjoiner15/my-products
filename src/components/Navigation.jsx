import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav className="main-nav">
            <div className="nav-container">
                <div className="nav-content">
                    <Link to="/" className="nav-brand">Trello Together</Link>
                    <ul className="nav-links">
                        <li>
                            <Link
                                to="/"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'active' : ''}`
                                }
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/templates"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'active' : ''}`
                                }
                            >
                                Templates
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
