import React from 'react';
import './BathroomCard.scss'

const BathroomCard = ( {bathroom} ) => {

    const {name, address} = bathroom
    return (
        <div className = 'bathroomCard'>
           <div className = 'bathroomCard__img'>
                <img src = 'https://media.architecturaldigest.com/photos/5d2f3540dea3bc0008636368/16:9/w_2580,c_limit/After-Photo-7.jpg'></img>
            </div>
           <div className = 'bathroomCard__name'> {name} </div>
           <div className = 'bathroomCard__address'> {address} </div>
        </div>
    );
};

export default BathroomCard;