import DataTable from 'react-data-table-component'
import React from 'react'

const CountryTable = () => {

 const filteredItems: string[] = [];
 
 return (
  <>
   <DataTable title="Country List" columns={[]} data={filteredItems} />
  </>
 )
}

export default CountryTable

