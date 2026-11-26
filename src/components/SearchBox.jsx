import './SearchBox.css';

export default function SearchBox({value, onChange, placeholder}) {
  return (
    <label className='search'>
      {/* Magnifier icon from the mockup; aria-hidden: decorative, screen readers skip it. */}
      <svg viewBox='0 0 24 24' aria-hidden='true'>
        <circle cx='11' cy='11' r='7' />
        <path d='M20 20l-4-4' />
      </svg>
      <input type="search" aria-label={placeholder} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} value={value}/></label>
  )
}
