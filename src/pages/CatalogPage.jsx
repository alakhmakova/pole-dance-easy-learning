import './CatalogPage.css';
import CategoryList from '../components/CategoryList'
import SearchBox from '../components/SearchBox'

export default function CatalogPage() {
    return (
        <main className='container catalog'>
            {/* Section heading from the mockup: small "Catalog" label with a leaf, then the big title. */}
            <div className='cat-head'>
                <span className='eyebrow'><img src='/images/leaf.svg' alt='' />Catalog</span>
                <h1>Choose what to learn</h1>
            </div>
            <CategoryList />
        </main>
    );
}