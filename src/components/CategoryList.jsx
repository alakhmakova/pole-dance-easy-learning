import CategoryCard from "./CategoryCard";
import "./CategoryList.css";
import { useState, useEffect } from "react";
import { getAllElements, getCategories } from "../api";
import { getMasteredIds, getOwnedIds } from "../storage";
// Shows a CategoryCard for every category from /data/categories.json,
// with the number of elements, owned and mastered elements in each category.

export default function CategoryList() {
    const [categories, setCategories] = useState([]);
    const [elements, setElements] = useState([]);
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
            .catch((err) => {
                // Technical details for the developer (F12 -> Console), do not show them to the user on the screen
                console.error(err);
                if (!ignore) setError(true);
            })
            .finally(() => {
                if (!ignore) setLoading(false);
            });

        // Cleanup: React calls this function when the component is removed from the page.
        // ignore = true stops the late response from updating the state of a removed component.
        return () => {
            ignore = true;
        };
    }, []);

    // Returns how many elements belong to the category.
    function countElementsInCategory(categoryId) {
        const categoryElements = elements.filter(
            (el) => el.categoryId === categoryId,
        );
        return categoryElements.length;
    }

    // Returns how many elements of the category have their id in ids (owned or mastered ids).
    function countIdsInCategory(ids, categoryId) {
        const categoryElements = elements.filter(
            el => el.categoryId === categoryId,
        );
        return categoryElements.filter(
            el => ids.includes(el.id),
        ).length;
    }

    if (loading) return <p className="status-message">Loading...</p>;
    // Short message for the user, without technical details
    if (error)
        return <p className="status-message">Categories could not be loaded.</p>;
    if (categories.length === 0)
        return <p className="status-message">No categories yet.</p>;
    // Ids from localStorage, read once for all cards.
    const ownedIds = getOwnedIds();
    const masteredIds = getMasteredIds();
    const listCategories = categories.map((category) => (
        <CategoryCard
            key={category.id}
            categoryId={category.id}
            url={category.url}
            categoryName={category.name}
            categoryTotal={countElementsInCategory(category.id)}
            categoryMastered={countIdsInCategory(masteredIds, category.id)}
            categoryOwned={countIdsInCategory(ownedIds, category.id)}
        />
    ));
    return <div className="category-list">{listCategories}</div>;
}
