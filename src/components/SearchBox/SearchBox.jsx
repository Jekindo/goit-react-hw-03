import { useId } from 'react';

const SearchBox = ({ search, onSearch }) => {
  const searchId = useId();

  return (
    <>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        name="search"
        id={searchId}
        value={search}
        onChange={e => {
          onSearch(e.target.value);
        }}
      />
    </>
  );
};

export default SearchBox;
