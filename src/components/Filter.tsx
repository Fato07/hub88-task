import { FaSearch } from 'react-icons/fa';
import React from 'react'

type Props = {
  onFilter: React.ChangeEventHandler<HTMLInputElement>,
  onClear?: any,
  filterText: string
};

function Filter({ onFilter, filterText }: Props): JSX.Element {
  return (
    <div className="search-container">
      <input
        type="text"
        name="search"
        className="search-input"
        value={filterText}
        onChange={onFilter}
        placeholder="Filter By Country Code" />
      <a href="#" className="search-btn">
        <FaSearch />
      </a>
    </div>
  );
}

export default Filter;