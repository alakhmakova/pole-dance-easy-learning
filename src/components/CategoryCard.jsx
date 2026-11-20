import './CategoryCard.css'
// Shows one category: picture, name, number of elements and mastered progress.

export default function CategoryCard({url, categoryName, categoryTotal, categoryMastered, categoryBought}){
return(
    <div className="category-card">
        <img src={url} alt={categoryName} />
        <div>
            <h2>{categoryName}</h2>
            <div>
                <p>{categoryTotal} elements</p>
                <p>{categoryMastered}/{categoryBought} mastered</p>
            </div>
        </div>
    </div>
);
}