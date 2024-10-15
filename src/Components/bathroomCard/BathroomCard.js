import React from 'react';
import { Link } from "react-router-dom"
import './BathroomCard.scss'

// const API = process.env.REACT_APP_API_URL;

const BathroomCard = ({ bathroom }) => {
    const { name, address, id, image } = bathroom;

    return (
        <div className='bathroomCard'>
            <Link to={`/bathrooms/${id}`} className='LinkStyle'>
            <div className='bathroomCard__img'>
                {image === "" ? (
                    <img
                    src="https://res.cloudinary.com/dgkkgldcc/image/upload/v1714971700/r5cdkqbnumc84vitwl7k.jpg"
                    alt={name}
                    />
                ) : (
                    <img src={image} alt={name} />
                )}
            </div>

                <div className='bathroomCard__name'> {name} </div>
                <div className='bathroomCard__address'> {address} </div>
            </Link>
        </div>
    );
};

export default BathroomCard;
