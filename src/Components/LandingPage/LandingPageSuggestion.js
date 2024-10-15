import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LandingPageSuggestion.scss';

function LandingPageSuggestion(props) {

    const [bathrooms, setBathrooms] = useState([]);

    useEffect(() => {
        const shuffleArray = array => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        const fetchData = async () => {
            try {
                const API = process.env.REACT_APP_API_URL;
                const response = await axios.get(`${API}/bathrooms`);
                const shuffledBathrooms = shuffleArray(response.data);
                setBathrooms(shuffledBathrooms);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, []); 

    const displayedBathrooms = bathrooms.slice(0, 8); // Limit to 8 bathrooms when displaying

    return (
        <section className='landing-card-container'>
            {displayedBathrooms.map(bathroom => (
                <div className='landing-card-content' key={bathroom.id}>
                    <img src='https://www.ocregister.com/wp-content/uploads/migration/nd9/nd945m-b88216318z.120141010160308000ggo5h9nt.10.jpg?w=620' alt={bathroom.name} />
                    <h2>{bathroom.name}</h2>
                    
                </div>
            ))}
        </section>
    );
}

export default LandingPageSuggestion;
