import './ElementRow.css';

// Turns technical value (0.1-1.0) into a difficulty level for the table.
function getLevel(techValue) {
    if (techValue <= 0.3) {
        return "Beginner";
    }
    else if (techValue <= 0.6) {
        return "Intermediate";
    }
    else {
        return "Advanced";
    }
}

// Shows one element as a table row: picture, name and tech value, difficulty level,
// and a Buy button (not bought yet) or a Mastered checkbox (bought).
export default function ElementRow({ element, owned, mastered, onBuy, onToggleMastered }) {
    return (
        <tr>
            <td><div className="thumb"><img src={element.image} alt="" /></div></td>
            <td>
                <div className="el-name">{element.name}</div>
                <div className="tv">Tech value {element.techValue.toFixed(1)}</div>
            </td>
            <td><span className="level">{getLevel(element.techValue)}</span></td>
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
