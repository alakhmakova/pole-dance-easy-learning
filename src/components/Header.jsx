import './Header.css'
import { useState } from "react";
import { Link } from "react-router";

const siteName = "Pole Dance";
const siteTagline = "Easy Learning";

export default function Header() {
    // true while the menu is open on a phone. On wider screens the menu is always visible
    // and the Menu button is hidden by CSS.
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo">
                    <img src="/images/logo.svg" alt="" />
                    <div className="logo-text">
                        <p className="site-name">{siteName}</p>
                        <p className="site-tagline">{siteTagline}</p>
                    </div>
                </Link>
                <button
                    type="button"
                    className="menu-btn"
                    aria-expanded={menuOpen}
                    aria-controls="main-menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "Close" : "Menu"}
                </button>
                {/* A click on any link closes the menu, so the new page is not covered by it. */}
                <nav
                    id="main-menu"
                    className={menuOpen ? "main-menu open" : "main-menu"}
                    onClick={() => setMenuOpen(false)}
                >
                    <Link to="/">Catalog</Link>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
}