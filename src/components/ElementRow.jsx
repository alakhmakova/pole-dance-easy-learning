import { Link } from 'react-router';
import './ElementRow.css';
import { getLevel } from '../utils';
import levelLeafUrl from '../assets/images/level-leaf.svg';
import levelLeafOffUrl from '../assets/images/level-leaf-off.svg';

// Shows one element as a table row: picture, name and tech value, difficulty level,
// and a Buy button (not bought yet) or a Mastered checkbox (bought).
export default function ElementRow({ element, owned, mastered, onBuy, onToggleMastered }) {
    const level = getLevel(element.techValue);
    // Number of filled leaves: position of the level in the list, counted from 1.
    const leafCount = ['Beginner', 'Intermediate', 'Advanced'].indexOf(level) + 1;

    return (
        // "locked" greys out the picture of an element that is not bought yet (see ElementRow.css).
        <tr className={owned ? undefined : "locked"}>
            <td>
                <div className="thumb">
                    <img src={element.image} alt="" />
                    {/* Lock badge on the picture of an element that is not bought yet.
                        aria-hidden: screen readers skip it, the Buy button already says the element is not bought. */}
                    {!owned && (
                        <span className="lock" aria-hidden="true">
                            {/* "Lock" icon by White Spaces Inc., Noun Project (CC BY 3.0). */}
                            <svg viewBox="13 4 74 92">
                                <path d="M75.3,38.8h-2.8c0,0,0,0,0,0h0V28c0-12.9-9.3-23-22.6-23C36.6,5,27.5,15.3,27.5,28v10.7h0c0,0.1,0,0.1,0,0h-2.8c-6.2,0-11.2,5-11.3,11.3v33.8c0,6.2,5,11.2,11.3,11.3h50.6c6.2,0,11.2-5,11.3-11.3V50C86.6,43.8,81.5,38.8,75.3,38.8z M33.1,38.8V28c0-9.6,6.6-17.4,16.8-17.4c10.1,0,17,7.6,17,17.4v10.7h0c0,0.1,0,0.1,0,0c0,0,0,0,0,0H33.1C33.1,38.8,33.1,38.8,33.1,38.8L33.1,38.8z M80.9,83.8c0,3.1-2.5,5.6-5.6,5.6H24.7c-3.1,0-5.6-2.5-5.6-5.6V50c0-3.1,2.5-5.6,5.6-5.6h50.6c3.1,0,5.6,2.5,5.6,5.6V83.8z M55.6,61.3c0,2.1-1.1,3.9-2.8,4.9h-0.1c0,0,0.1,0,0.1,0v9.2c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8v-9.2c0,0,0.1,0,0.1,0h-0.1c-1.7-1-2.8-2.8-2.8-4.9c0-3.1,2.5-5.6,5.6-5.6C53.1,55.6,55.6,58.1,55.6,61.3z" />
                            </svg>
                        </span>
                    )}
                </div>
            </td>
            <td>
                {
                    owned ? (<Link to={`/element/${element.id}`} className="el-name">{element.name}</Link>) : (<div className="el-name">{element.name}</div>)
                }
                <div className="tv">Tech value {element.techValue.toFixed(1)}</div>
            </td>
            <td>
                {/* Level with leaves (from the mockup): 1 filled leaf for Beginner, 2 for Intermediate, 3 for Advanced;
                    the other leaves are outlines. The leaves are decoration (alt=""), the word says the level. */}
                <span className="level">
                    <span className="leaves">
                        {[1, 2, 3].map(n =>
                            <img key={n} src={n <= leafCount ? levelLeafUrl : levelLeafOffUrl} alt='' />
                        )}
                    </span>
                    {level}
                </span>
            </td>
            <td>
                <div className="status">
                    {owned ? (
                        <label className="check">
                            <input
                                type="checkbox"
                                checked={mastered}
                                aria-label={`Mastered: ${element.name}`}
                                onChange={() => onToggleMastered(element.id)}
                            />
                        </label>
                    ) : (
                        <button type="button" className="btn btn-price" onClick={() => onBuy(element.id)}>Buy · €{element.price}</button>
                    )}
                </div>
            </td>
        </tr>
    );
}
