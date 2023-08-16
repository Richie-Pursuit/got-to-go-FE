import React from 'react';
import './BathroomCard.scss'

const BathroomCard = () => {
    return (
        <div className='bathroomCard'>
           <div className='bathroomCard__img'>
                <img src='https://media.architecturaldigest.com/photos/5d2f3540dea3bc0008636368/16:9/w_2580,c_limit/After-Photo-7.jpg'></img>
            </div>
           <div className='bathroomCard__name'>Arcilla Playground</div>
           <div className='bathroomCard__address'>Teller Avenue, Park Avenue, Clay Avenue, East 64 Street</div>
        </div>
    );
};

export default BathroomCard;