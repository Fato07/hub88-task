import DataTable, { TableColumn } from 'react-data-table-component'
import { useMemo, useState } from 'react'

import { ClipLoader } from 'react-spinners';
import FilterComponent from '../components/FilterComponent';
import { QUERY_COUNTRIES_LIST } from '../query';
import { useQuery } from '@apollo/client';

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
            <FilterComponent onFilter={(e) => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
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
        <div>
            {loading ?
                <ClipLoader
                color="#000000"
                loading={loading}
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

