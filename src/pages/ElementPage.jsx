import './ElementPage.css';
import { getLevel } from '../utils';
import { useEffect, useState } from 'react';
import { getMasteredIds, getOwnedIds, toggleMastered } from '../storage';
import { Link, Navigate, useParams } from 'react-router';
import { getAllElements, getCategories } from '../api';
import leafUrl from '../assets/images/leaf.svg';

export default function ElementPage() {
    const { id } = useParams();

    const [elements, setElements] = useState([]);
    const [categories, setCategories] = useState([]);
    const [mastered, setMastered] = useState(getMasteredIds);
    const [wide, setWide] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        let ignore = false;
        // Each setter runs only if this request is still the current one (ignore is false).
        Promise.all([getCategories(), getAllElements()])
            .then(([loadedCategories, loadedElements]) => {
                if (!ignore) {
                    setCategories(loadedCategories);
                    setElements(loadedElements);
                }
            })
            .catch(err => {
                // Technical details for the developer (F12 -> Console), do not show them to the user on the screen
                console.error(err);
                if (!ignore) setError(true);
            })
            .finally(() => {
                if (!ignore) setLoading(false);
            });

        // Cleanup: React calls this function when the page is closed.
        // ignore = true marks the request as outdated, so a late response
        // does not update the state of a page that is no longer shown.
        return () => {
            ignore = true;
        }
    }, []);

    // The same page stays open when Previous / Next changes the address, so the browser keeps the scroll position.
    // This Effect scrolls back to the top every time the element id changes.
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Saves the new mastered list in localStorage and updates the state, so the Mastered button re-renders.
    function handleToggleMastered(elementId) {
        setMastered(toggleMastered(elementId));
    }

    const element = elements.find(el => el.id === id);

    if (loading) return <main className='container'><p className='status-message'>Loading...</p></main>;
    // Short message for the user, without technical details
    if (error) return <main className='container'><p className='status-message'>Element could not be loaded.</p></main>;
    if (!element) return <main className='container'><p className='status-message'>Element not found.</p></main>;
    const category = categories.find(c => c.id === element.categoryId);
    if (!category) return <main className='container'><p className='status-message'>Category not found.</p></main>;
    const isMastered = mastered.includes(element.id);
    const ownedIds = getOwnedIds();
    // Previous / next links: bought elements of the same category, in the order of elements.json.
    // An element at the start or the end of this list has no previous or next element (undefined).
    const ownedInCategory = elements.filter(el => el.categoryId === element.categoryId && ownedIds.includes(el.id));
    const position = ownedInCategory.findIndex(el => el.id === element.id);
    const previousElement = ownedInCategory[position - 1];
    const nextElement = ownedInCategory[position + 1];
    if (ownedIds.includes(id)) {
        return (
            <main className='container'>
                <div className='crumbs'>
                    <Link to='/'>Catalog</Link> / <Link to={`/category/${element.categoryId}`}>{category.name}</Link> / <span>{element.name}</span>
                </div>
                <div className={wide ? "el-wrap wide" : "el-wrap"}>
                    <div className='el-image'>
                        {/* onLoad runs when the image has loaded: landscape images (wider than tall) get the wide layout. */}
                        <img src={element.image} alt={`Illustration of ${element.name}`} onLoad={(event) => setWide(event.target.naturalWidth > event.target.naturalHeight)} />
                    </div>
                    <div className='el-info'>
                        {/* Two blocks: on the wide layout they stand side by side under the image. */}
                        <div className='el-text'>
                            <span className='eyebrow'>{category.name}</span>
                            <h1>{element.name}</h1>
                            <div className='badges'>
                                <span className='badge'>{getLevel(element.techValue)}</span>
                                <span className='badge'>Tech value {element.techValue.toFixed(1)}</span>
                            </div>
                            <p className='el-desc'>{element.description}</p>
                        </div>
                        <div className='el-aim'>
                            <h2><img src={leafUrl} alt='' />What to aim for</h2>
                            <ul className='points'>
                                {element.criteria.map(point =>
                                    <li key={point.label}>
                                        <b>{point.label}</b>
                                        <span>{point.text}</span>
                                    </li>
                                )}
                            </ul>
                        </div>
                        {/* Outside el-aim, so on the wide layout the button spans both columns. */}
                        <button type='button' className='master-btn' aria-pressed={isMastered} onClick={() => handleToggleMastered(element.id)}>
                            {/* One span holds the title and the note, so they stand one under the other next to the circle. */}
                            <span>
                                <b>{isMastered ? 'Mastered' : 'Mark as mastered'}</b>
                                <span className='note'>
                                    {isMastered ? 'Well done! Click again to undo.' : 'Keep practising: listen to your body and it will come.'}
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
                {/* Pager under the element: previous bought element, back to the category, next bought element.
                    Without a previous or next element the link is a grey text that cannot be clicked. */}
                <nav className='pager' aria-label='Elements of this category'>
                    {previousElement ? (
                        <Link to={`/element/${previousElement.id}`} className='step'>← Previous element</Link>
                    ) : (
                        <span className='step disabled'>← Previous element</span>
                    )}
                    <Link to={`/category/${element.categoryId}`} className='step back'>All {category.name} elements</Link>
                    {nextElement ? (
                        <Link to={`/element/${nextElement.id}`} className='step next'>Next element →</Link>
                    ) : (
                        <span className='step next disabled'>Next element →</span>
                    )}
                </nav>
            </main>
        );
    } else {
       return <Navigate to={`/category/${element.categoryId}`} replace />;
    }


}
