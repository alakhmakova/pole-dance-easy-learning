import { Link } from "react-router";
import './CategoryCard.css'
// Shows one category: picture, name, number of elements and mastered progress.

export default function CategoryCard({categoryId, url, categoryName, categoryTotal, categoryMastered, categoryOwned}){
return(
    <Link to={`/category/${categoryId}`} className="category-card">
        <img src={url} alt={categoryName} />
        <div className='category-info'>
            <h2>{categoryName}</h2>
            <div className='category-meta'>
                <p>{categoryTotal} elements</p>
                <p>{categoryMastered}/{categoryOwned} mastered</p>
            </div>
        </div>
    </Link>
);
}