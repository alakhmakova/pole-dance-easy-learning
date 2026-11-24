// Hooks (useState, useEffect, useParams: functions whose names start with "use")
// can only be called at the top level of a component, never inside conditions, loops or nested functions.
import { useState, useEffect } from 'react'
import { useParams } from "react-router";
import { getCategory, getElements } from '../api';

export default function CategoryPage() {
    // id comes from the page address: the route in App.jsx is category/:id,
    // so for /category/flexibility id is "flexibility".
    const { id } = useParams();

    // useState(initial value) returns a pair: the current value and the setter function that changes it.
    // [elements, setElements] is array destructuring: it unpacks this pair into two variables.
    // React keeps the value between renders; calling the setter makes React render the component again.
    const [elements, setElements] = useState([]);
    const [category, setCategory] = useState(null);
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

    if (loading) return <main className='container'><p className='status-message'>Loading...</p></main>;
    // Short message for the user, without technical details
    if (error) return <main className='container'><p className='status-message'>Category could not be loaded.</p></main>;
    if (!category) return <main className='container'><p className='status-message'>Category not found.</p></main>;
    if (elements.length === 0) return <main className='container'><p className='status-message'>Elements for this category are coming soon.</p></main>;
    /*const listElements = elements.map(element =>

    );*/

    return <main className='container'><h1>{category.name}</h1></main>
}
