import React from 'react'

const FilterComponent = (props: { onFilter: React.ChangeEventHandler<HTMLInputElement> | undefined, onClear: any, filterText: string | number | readonly string[] | undefined }) => {
 return (
  <>
   <span>
    Search:{' '}
    <input
     className="form-control"
     value={props.filterText}
     onChange={props.onFilter}
     placeholder="Filter By Country Code"
    />
   </span>
  </>
 )
}

export default FilterComponent;