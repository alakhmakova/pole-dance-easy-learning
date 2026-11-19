import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <p className="site-name">Pole Dance</p>
            <p className="site-tagline">Easy Learning</p>
            <nav className="main-menu">
                <a href="/">Catalog</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}