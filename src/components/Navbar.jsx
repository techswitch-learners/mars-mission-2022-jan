import { useState } from "react"
import { Link } from "react-router-dom";

export const Navbar = () => {
    // See https://bulma.io/documentation/components/navbar/
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/" className="navbar-item">
                <img src="/mars-mission.png" alt="Mars Mission logo" width="28" height="28" />
            </Link>
            <div
                role="button"
                className={`navbar-burger ${isOpen ? "is-active" : ""}`}
                aria-label="menu"
                aria-expanded={isOpen ? "true" : "false"}
                onClick={toggleIsOpen}
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </div>
        </div>
        <div className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
            <div className="navbar-start">
                <Link to="/" className="navbar-item">
                    Home
                </Link>
                <Link to="/info" className="navbar-item">
                    Info
                </Link>
            </div>
            <div className="navbar-end">
            
            </div>
        </div>
    </nav>
}
