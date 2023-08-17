import { useState } from 'react';
import './BathroomSearchBar.scss'

function BathroomSearchBar({ bathrooms,setFilteredBathrooms }) {
    const [filterValue, setFilterValue] = useState('');
    
  
    const filterBathrooms = (titleValue) => {
      const filtered = bathrooms.filter(
        (bathroom) =>
          bathroom.name.toLowerCase().includes(titleValue.toLowerCase())
      );
      setFilteredBathrooms(filtered);
    };
  
  const handleTitleFilterChange = (e) => {
    const titleValue = e.target.value;
    setFilterValue(titleValue);
    filterBathrooms(titleValue);
  };


    return (
        <div className = 'bathroomSearchBar'>
        <div className = 'bathroomSearchBar__input'>
            <input
            type = 'text'
            value = {filterValue}
            onChange = {handleTitleFilterChange}
            placeholder = 'Filter by name...'
            />
        </div>
        </div>
    );
}

export default BathroomSearchBar;