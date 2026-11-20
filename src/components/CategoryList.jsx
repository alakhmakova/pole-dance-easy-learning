import CategoryCard from './CategoryCard'
import './CategoryList.css'
import {categories} from '../data/categories'
// Shows a CategoryCard for every category from data/categories.js.

export default function CategoryList() {
    const listCategories = categories.map(category =>
        <CategoryCard
            key={category.id}
            url={category.url}
            categoryName={category.name}
            categoryTotal={category.total}
            categoryMastered={category.mastered}
            categoryBought={category.bought}
        />
    );
    return <div>{listCategories}</div>
}