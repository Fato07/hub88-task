import { FaSearch } from 'react-icons/fa';
import React from 'react'

const Filter = (props: { onFilter: React.ChangeEventHandler<HTMLInputElement> | undefined, onClear: any, filterText: string | number | readonly string[] | undefined }) => {
 return (
  <div className="search-container">
    <input
     type="text"
     name="search"
     className="search-input"
     value={props.filterText}
     onChange={props.onFilter}
     placeholder="Filter By Country Code"
    />
     <a href="#" className="search-btn">
      <FaSearch/>
    </a>
  </div>
 )
}

export default Filter;