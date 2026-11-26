import './CatalogPage.css';
import CategoryList from '../components/CategoryList'
import Hero from '../components/Hero';
import leafUrl from '../assets/images/leaf.svg';
import dividerUrl from '../assets/images/divider-sprig.svg';

export default function CatalogPage() {
    return (
        <main>
            <Hero />
            {/* Decorative divider between the hero and the catalog (styles in Hero.css). */}
            <div className='divider' aria-hidden='true'>
                <img src={dividerUrl} alt='' />
            </div>
            {/* id="catalog": the "Browse categories" button in the hero scrolls here. */}
            <section id='catalog' className='container catalog'>
                {/* Section heading from the mockup: small "Catalog" label with a leaf, then the big title.
                    h2, because the h1 of the page is the slogan in the hero. */}
                <div className='cat-head'>
                    <span className='eyebrow'><img src={leafUrl} alt='' />Catalog</span>
                    <h2>Choose what to learn</h2>
                </div>
                <CategoryList />
            </section>
        </main>
    );
}