import { useState, useEffect } from 'react';
import axios from 'axios';
import BathroomSearchBar from '../Components/bathroomSearchBar/BathroomSearchBar';
import BathroomList from '../Components/bathroomList/BathroomList';

const Index = () => {
    const [bathrooms, setBathrooms] = useState([]);
    const [filteredBathrooms, setFilteredBathrooms] = useState([]);

    useEffect(() => {
        const API = process.env.REACT_APP_API_URL;
        axios
            .get(`${API}/bathrooms`)
            .then(res => {
                setBathrooms(res.data);
                setFilteredBathrooms(res.data);
            })
            .catch((error) => console.warn("Error fetching data", error));
    }, []);

    return (
        <div>
            <div className='bathroomList__searchbar'>
                <BathroomSearchBar bathrooms={bathrooms} setFilteredBathrooms={setFilteredBathrooms} />
            </div>
            <div>
                <BathroomList filteredBathrooms={filteredBathrooms} />
            </div>
        </div>
    );
};

export default Index;
