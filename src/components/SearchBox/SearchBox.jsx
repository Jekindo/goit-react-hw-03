import { useId } from 'react';

import s from './SearchBox.module.css';

const SearchBox = ({ value, onSearch }) => {
  const searchId = useId();

  return (
    <div className={s.searchBox}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        name="search"
        id={searchId}
        value={value}
        onChange={e => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
