import './Header.css'
import { Link } from "react-router";

const siteName = "Pole Dance";
const siteTagline = "Easy Learning";

export default function Header() {
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
                <nav className="main-menu">
                    <Link to="/">Catalog</Link>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
}