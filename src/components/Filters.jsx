import './Filters.css';

export default function Filters({ selected, onChange }) {
    return (
        <div className='level-filter'>
            <button type='button' onClick={() => onChange('All')} aria-pressed={selected === 'All'}>All levels</button>
            <button type='button' onClick={() => onChange('Beginner')} aria-pressed={selected === 'Beginner'}>Beginner</button>
            <button type='button' onClick={() => onChange('Intermediate')} aria-pressed={selected === 'Intermediate'}>Intermediate</button>
            <button type='button' onClick={() => onChange('Advanced')} aria-pressed={selected === 'Advanced'}>Advanced</button>
        </div>
    )
}