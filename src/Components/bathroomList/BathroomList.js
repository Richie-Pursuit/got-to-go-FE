import React from 'react';
import './BathroomList.scss';
import BathroomCard from '../bathroomCard/BathroomCard';

const BathroomList = () => {
    return (
        <div className='bathroomList'>
            <h1 className='bathroomList__title'>Bathrooms</h1>
            <div className='bathroomList__container' >
                <BathroomCard />
                <BathroomCard />
                <BathroomCard />
                <BathroomCard />
                <BathroomCard />
            </div>
        </div>
    );
};

export default BathroomList;