import CategoryCard from './CategoryCard'
import './CategoryList.css'
import { useState, useEffect } from 'react'
import { getCategories } from '../api'
// Shows a CategoryCard for every category from /data/categories.json.

export default function CategoryList() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getCategories()
            .then(data => setCategories(data))
            .catch(err => {
                // Technical details for the developer (F12 -> Console), do not show them to the user on the screen
                console.error(err);
                setError(true);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p className='status-message'>Loading...</p>;
    // Short message for the user, without technical details
    if (error) return <p className='status-message'>Categories could not be loaded.</p>;
    if (categories.length === 0) return <p className='status-message'>No categories yet.</p>;
    const listCategories = categories.map(category =>
        <CategoryCard
            key={category.id}
            categoryId={category.id}
            url={category.url}
            categoryName={category.name}
            categoryTotal={category.total}
            categoryMastered={category.mastered}
            categoryBought={category.bought}
        />
    );
    return <div className='category-list'>{listCategories}</div>
}