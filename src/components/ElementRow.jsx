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

// Shows one element as a table row: picture, name and tech value, difficulty level, Buy button.
export default function ElementRow({ element }) {
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
                    <button type="button" className="btn btn-price">Buy · €{element.price}</button>
                </div>
            </td>
        </tr>
    );
} 