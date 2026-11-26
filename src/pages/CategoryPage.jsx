// Hooks (useState, useEffect, useParams: functions whose names start with "use")
// can only be called at the top level of a component, never inside conditions, loops or nested functions.
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router";
import { getCategory, getElements } from '../api';
import ElementRow from '../components/ElementRow';
import './CategoryPage.css';
import { buyElement, getMasteredIds, getOwnedIds, toggleMastered } from '../storage';
import SearchBox from '../components/SearchBox';
import Filters from '../components/Filters';
import { getLevel, matchesSearch } from '../utils';

export default function CategoryPage() {
    // useParams reads the parameters from the address of the current page.
    // id comes from the page address: the route in App.jsx is category/:id,
    // so for /category/flexibility id is "flexibility".
    const { id } = useParams();

    // useState(initial value) returns a pair: the current value and the setter function that changes it.
    // [elements, setElements] is array destructuring: it unpacks this pair into two variables.
    // React keeps the value between renders; calling the setter makes React render the component again.
    const [elements, setElements] = useState([]);
    const [category, setCategory] = useState(null);
    // Ids of bought and mastered elements, read from localStorage.
    // The function is passed without (), so React calls it only on the first render, not on every render.
    const [owned, setOwned] = useState(getOwnedIds);
    const [mastered, setMastered] = useState(getMasteredIds);
    const [searchText, setSearchText] = useState('');
    const [level, setLevel] = useState('All');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // An Effect runs after the render, to synchronize the component with something outside React (here: the JSON files).
    // The dependency array [id] makes the Effect run only after the first render and again when id changes.
    useEffect(() => {
        let ignore = false;
        // Each setter runs only if this request is still the current one (ignore is false).
        Promise.all([getCategory(id), getElements(id)])
            .then(([loadedCategory, loadedElements]) => {
                if (!ignore) {
                    setCategory(loadedCategory);
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

        // Cleanup: React calls this function before running the Effect again for a new id
        // (and when the page is closed). ignore = true marks the old request as outdated,
        // so its late response must not overwrite the data of the new category.
        return () => {
            ignore = true;
        }
    }, [id]);

    // Saves the purchase in localStorage and updates the state, so the row re-renders as bought.
    function handleBuy(elementId) {
        setOwned(buyElement(elementId));
    }

    // Saves the new mastered list in localStorage and updates the state, so the checkbox re-renders.
    function handleToggleMastered(elementId) {
        setMastered(toggleMastered(elementId));
    }

    if (loading) return <main className='container'><p className='status-message'>Loading...</p></main>;
    // Short message for the user, without technical details
    if (error) return <main className='container'><p className='status-message'>Category could not be loaded.</p></main>;
    if (!category) return <main className='container'><p className='status-message'>Category not found.</p></main>;
    // Elements shown in the table: the name contains the search text
    // and the level matches the chosen button ('All' shows every level).
    const visibleElements = elements.filter(element => matchesSearch(element.name, searchText) && (level === 'All' || getLevel(element.techValue) === level));
    // Numbers for the progress in the header: bought elements of this category and mastered ones among them.
    const ownedCount = elements.filter(el => owned.includes(el.id)).length;
    const masteredCount = elements.filter(el => mastered.includes(el.id)).length;
    const listElements = visibleElements.map(element =>
        <ElementRow
            key={element.id}
            element={element}
            owned={owned.includes(element.id)}
            mastered={mastered.includes(element.id)}
            onBuy={handleBuy}
            onToggleMastered={handleToggleMastered}
        />
    );

    return (
        <main className='container'>
            <div className='crumbs'>
                <Link to='/'>Catalog</Link> / <span>{category.name}</span>
            </div>
            {/* Category header: name and description on the left, mastered progress on the right. */}
            <div className='cat-top'>
                <div>
                    <h1 className='category-title'>{category.name}</h1>
                    <p className='cat-desc'>{category.description}</p>
                </div>
                <div className='progress'>
                    <b>{masteredCount} / {ownedCount}</b>
                    <span>mastered of the elements you own</span>
                </div>
            </div>
            {elements.length === 0 ? (
                <p className='status-message'>Elements for this category are coming soon.</p>
            ) : (
                <>
                    <div className='table-tools'>
                        <SearchBox
                            value={searchText}
                            onChange={setSearchText}
                            placeholder='Search elements'
                        />
                        <Filters
                            selected={level}
                            onChange={setLevel}
                        />
                    </div>
                    {visibleElements.length === 0 ? (<p className='status-message'>No elements match your search.</p>) : (
                        <div className='table-box'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Element</th>
                                        <th></th>
                                        <th>Difficulty</th>
                                        <th>Mastered</th>
                                    </tr>
                                </thead>
                                <tbody>{listElements}</tbody>
                            </table>
                        </div>
                    )
                    }
                </>
            )}
        </main>
    );
}
