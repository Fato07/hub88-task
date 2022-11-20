import { BounceLoader, ClipLoader, GridLoader, MoonLoader } from 'react-spinners';
import { CSSProperties, useMemo, useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'

import Filter from '../components/Filter';
import { QUERY_COUNTRIES_LIST } from '../query';
import { useQuery } from '@apollo/client';

const override: CSSProperties = {
    display: "block",
    margin: "25% auto"
};
  
const CountryTable = () => {

    const { data, loading, error } = useQuery(QUERY_COUNTRIES_LIST);
    const [filterText, setFilterText] = useState('')
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);


    const filteredItems = data?.countries.filter(
        (item: { code: string; }) => item.code && item.code.toUpperCase().includes(filterText.toUpperCase()),
    );

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <Filter onFilter={(e) => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);

    const columns: TableColumn<{ name: string; code: string }>[] = [
        {
            id: 'country name',
            name: 'Country Name',
            selector: (row: { name: any; }) => row.name,
        },
        {
            id: 'country code',
            name: 'Country Code',
            selector: (row: { code: any; }) => row.code,
        },
    ];

    return (
        <div className='table-container'>
            {loading ?
                <BounceLoader
                    color="#000000"
                    loading={loading}
                    cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> :
                <DataTable
                    title="Country List"
                    columns={columns}
                    data={filteredItems}
                    pagination
                    paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                    subHeader
                    subHeaderComponent={subHeaderComponentMemo}
                    persistTableHead />
            }
        </div>
    )
}

export default CountryTable

