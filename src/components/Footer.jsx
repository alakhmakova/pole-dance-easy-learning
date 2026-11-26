// Link (imported from "react-router") is used instead of a plain <a> for pages inside the site.
// Write to="/" instead of href="/". A plain <a> reloads the whole site,
// Link only switches the page, without a reload.
// About and Contact stay plain <a href="#about"> / <a href="#contact">: they are anchors
// that scroll to this footer, not separate pages.
import { Link } from "react-router";
import './Footer.css';
import logoUrl from '../assets/images/logo.svg';

const siteName = "Pole Dance";
const siteTagline = "Easy Learning";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <section id="about" className="footer-col">
                    <Link to="/" className="logo">
                        <img src={logoUrl} alt="" />
                        <div className="logo-text">
                            <p className="site-name">{siteName}</p>
                            <p className="site-tagline">{siteTagline}</p>
                        </div>
                    </Link>
                    <h2>About us</h2>
                    <p>Pole Dance Easy Learning is an online pole school for adults who want to learn at their own pace. Every element is hand-drawn and explained with the official IPSF criteria, so you always know what to aim for.</p>
                </section>
                <section id="contact" className="footer-col">
                    <h2>Contact</h2>
                    <ul className="contact-list">
                        <li>
                            <b>Email</b>
                            <span>hello@poledance-easylearning.com</span>
                        </li>
                        <li>
                            <b>Instagram</b>
                            <span>@poledance.easylearning</span>
                        </li>
                        <li>
                            <b>Where</b>
                            <span>Stockholm, Sweden · lessons online worldwide</span>
                        </li>
                        <li>
                            <b>Replies</b>
                            <span>Within 24 hours, Monday to Friday</span>
                        </li>
                    </ul>
                </section>
                <form className="footer-col contact-form">
                    <h2>Write to us</h2>
                    <label htmlFor="contact-name">Name</label>
                    <input type="text" name="name" id="contact-name" required />
                    <label htmlFor="contact-email">Email</label>
                    <input type="email" name="email" id="contact-email" required />
                    <label htmlFor="contact-message">Message</label>
                    <textarea name="message" id="contact-message" required></textarea>
                    <button className="btn" type="submit">Send message</button>
                </form>
            </div>
            <p className="container footer-bottom">© 2026 Pole Dance Easy Learning · Logo, flowers and branch by Hary Murdiono JS, Noun Project (CC BY 3.0) · Leaf icons by Ladang Visual, Noun Project (CC BY 3.0) · Lock icon by White Spaces Inc., Noun Project (CC BY 3.0)</p>
        </footer>
    );
}