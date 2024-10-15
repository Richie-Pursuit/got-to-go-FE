import { useState, useEffect } from 'react';
import './BathroomSearchBar.scss';

function BathroomSearchBar({ bathrooms, setFilteredBathrooms }) {
    const [filterValue, setFilterValue] = useState('');
    const [cityFilter, setCityFilter] = useState(''); 
    const [searchPerformed, setSearchPerformed] = useState(false); 
    
    const filterBathrooms = (value, city) => {
        const filtered = bathrooms.filter(bathroom => {
            if (city && city !== '' && bathroom.city.toLowerCase() !== city.toLowerCase()) {
                return false; 
            }
            return (
                bathroom.name.toLowerCase().includes(value.toLowerCase()) ||
                bathroom.zipcode.includes(value)
            );
        });
        setFilteredBathrooms(filtered);
        setSearchPerformed(true); 
    };

    const handleTitleFilterChange = (e) => {
        const titleValue = e.target.value;
        setFilterValue(titleValue);
    };

    const handleSearchClick = () => {
        filterBathrooms(filterValue, cityFilter);
    };

    const handleCityFilterChange = (e) => {
        const selectedCity = e.target.value;
        setCityFilter(selectedCity);
        filterBathrooms(filterValue, selectedCity);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            filterBathrooms(filterValue, cityFilter);
        }
    };

    const handleBackButtonClick = () => {
        setSearchPerformed(false); // Reset search performed 
        setFilteredBathrooms(bathrooms); // Set filteredBathrooms back to the original list of bathrooms
        setFilterValue(''); // Clear filterValue
        setCityFilter(''); // Clear cityFilter
        window.location.reload(); // Refresh the page
    };

    useEffect(() => {
        if (!searchPerformed) {
            // Reset filters and filtered results when search is reset
            setFilteredBathrooms([]);
            setFilterValue('');
            setCityFilter('');
        }
    }, [searchPerformed, setFilteredBathrooms]);

    return (
        <div className='bathroomSearchBar'>
            <div className='bathroomSearchBar__input'>
                <input
                    type='text'
                    value={filterValue}
                    onChange={handleTitleFilterChange}
                    onKeyDown={handleKeyPress} // Add event listener for Enter key
                    placeholder='name or zipcode...'
                />
                <select value={cityFilter} onChange={handleCityFilterChange}>
                    <option value=''>All Locations</option>
                    <option value='Manhattan'>Manhattan</option>
                    <option value='Bronx'>Bronx</option>
                    <option value='Queens'>Queens</option>
                    <option value='Brooklyn'>Brooklyn</option>
                    <option value='Staten Island'>Staten Island</option>
                </select>
                <button onClick={handleSearchClick}>Search</button>
                {searchPerformed && <button onClick={handleBackButtonClick}>Back</button>}
            </div>
        </div>
    );
}

export default BathroomSearchBar;
