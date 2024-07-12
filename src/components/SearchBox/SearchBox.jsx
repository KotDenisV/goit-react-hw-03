import s from './SearchBox.module.css'

function SearchBox({ value, onSearch }) {
    return (
        <label className={s.label}>
            <span>Finde contacts by name</span>
            <input
                className={s.input}
                type="text"
                value={value}
                onChange={(e) => onSearch(e.target.value)}
            />
       </label>
    );
}

export default SearchBox;