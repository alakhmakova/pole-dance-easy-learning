import './Header.css'
const siteName = "Pole Dance";
const siteTagline = "Easy Learning";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <a href="/" className="logo">
                    <img src="/images/logo.svg" alt="" />
                    <div className="logo-text">
                        <p className="site-name">{siteName}</p>
                        <p className="site-tagline">{siteTagline}</p>
                    </div>
                </a>
                <nav className="main-menu">
                    <a href="/">Catalog</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
}