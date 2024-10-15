import React, { useState } from 'react';
import './BathroomList.scss';
import BathroomCard from '../bathroomCard/BathroomCard';

const BathroomList = ({ filteredBathrooms }) => {
    const [displayCount, setDisplayCount] = useState(20);

    const handleLoadMore = () => {
        setDisplayCount(prevCount => prevCount + 20);
    };

    const displayedBathrooms = filteredBathrooms.slice(0, displayCount);

    return (
        <div className="bathroomList">
            <h1 className="bathroomList__title">Bathrooms</h1>
            <div className="bathroomList__container">
                {filteredBathrooms.length === 0 ? (
                    <p className="bathroomList__empty">No bathrooms found.</p>
                ) : (
                    displayedBathrooms.map((bathroom) => (
                        <BathroomCard key={bathroom.id} bathroom={bathroom} />
                    ))
                )}
            </div>
            {displayCount < filteredBathrooms.length && (
                <button className="bathroomList__loadMore" onClick={handleLoadMore}>
                    Load More
                </button>
            )}
        </div>
    );
};

export default BathroomList;