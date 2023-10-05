import React from 'react';
import { Link } from "react-router-dom"
import './BathroomCard.scss'
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

const BathroomCard = ( {bathroom} ) => {


    const {name, address, id} = bathroom
    return (
        <div className = 'bathroomCard'>
            <Link to={`/bathrooms/${id}`}>
           <div className = 'bathroomCard__img'>
                <img src = 'https://media.architecturaldigest.com/photos/5d2f3540dea3bc0008636368/16:9/w_2580,c_limit/After-Photo-7.jpg'></img>
            </div>
           <div className = 'bathroomCard__name'> {name} </div>
           <div className = 'bathroomCard__address'> {address} </div>
           </Link>
        </div>
    );
};

export default BathroomCard;