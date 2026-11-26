import { Link } from "react-router";
import './CategoryCard.css'
// Shows one category: picture, name, number of elements and mastered progress.

export default function CategoryCard({categoryId, url, categoryName, categoryTotal, categoryMastered, categoryOwned}){
// Share of bought elements that are mastered, in percent (0 when nothing is bought yet): width of the progress bar.
const masteredPercent = categoryOwned > 0 ? Math.round(categoryMastered / categoryOwned * 100) : 0;
return(
    <Link to={`/category/${categoryId}`} className="category-card">
        <img src={url} alt={categoryName} />
        <div className='category-info'>
            <h2>{categoryName}</h2>
            <div className='category-meta'>
                <p>{categoryTotal} elements</p>
                <p>{categoryMastered}/{categoryOwned} mastered</p>
            </div>
            {/* Progress bar: the olive part shows the mastered share. aria-hidden: the numbers above already say it. */}
            <div className='bar' aria-hidden='true'>
                <span style={{ width: `${masteredPercent}%` }}></span>
            </div>
        </div>
    </Link>
);
}