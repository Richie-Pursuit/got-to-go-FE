import { useState, useEffect} from 'react';
import axios from 'axios';
import './BathroomList.scss';
import BathroomSearchBar from '../bathroomSearchBar/BathroomSearchBar';
import BathroomCard from '../bathroomCard/BathroomCard';


const API = process.env.REACT_APP_API_URL;


const BathroomList = () => {

const [bathrooms, setBahtrooms] = useState([]);
const [filteredBathrooms, setFilteredBathrooms] = useState([])

useEffect(() => {
  axios
    .get(`${API}/bathrooms`)
    .then(res => {
        setBahtrooms(res.data);
        setFilteredBathrooms(res.data)
      })
    .catch((c) => console.warn("catch", c));
}, []);

    return (
        <div className = 'bathroomList'>
            <h1 className = 'bathroomList__title'> Bathrooms </h1>
            <div className='bathroomList__searchbar'>
                <BathroomSearchBar bathrooms = {bathrooms} setFilteredBathrooms = {setFilteredBathrooms} />
            </div>

            <div className = 'bathroomList__container' >
                {filteredBathrooms.map ((bathroom) => {
                    return <BathroomCard key = {bathroom.id} bathroom = {bathroom} />
                })}
            </div>
        </div>
    );
};

export default BathroomList;