import { useState } from 'react';
import './BathroomSearchBar.scss';

function BathroomSearchBar({ bathrooms, setFilteredBathrooms }) {
    const [filterValue, setFilterValue] = useState('');
    const [cityFilter, setCityFilter] = useState(''); 
    
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

    return (
        <div className='bathroomSearchBar'>
            <div className='bathroomSearchBar__input'>
                <input
                    type='text'
                    value={filterValue}
                    onChange={handleTitleFilterChange}
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
            </div>
        </div>
    );
}

export default BathroomSearchBar;
