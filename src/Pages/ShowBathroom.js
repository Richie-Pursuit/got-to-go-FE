import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import BathroomDetail from '../Components/bathroomDetail/BathroomDetail';
import Perks from '../Components/perks/Perks';
import BathroomMap from '../Components/bathroomMap/BathroomMap';
import './ShowBathroom.scss';

const API = process.env.REACT_APP_API_URL;

const ShowBathroom = () => {
    const defaultImageURL = 'https://media.architecturaldigest.com/photos/5d2f3540dea3bc0008636368/16:9/w_2580,c_limit/After-Photo-7.jpg';
    const { id } = useParams();
    const [bathroom, setBathroom] = useState([]);

    useEffect(() => {
        axios
            .get(`${API}/bathrooms/${id}`)
            .then((response) => {
                const updatedBathroom = {
                    ...response.data,
                    image: response.data.image || defaultImageURL,
                };
                setBathroom(updatedBathroom);
            })
            .catch((error) => {
                console.warn("Error:", error);
            });
    }, [id]);

    return (
        <div className="showBathroom">
            <div className="leftColumn">
            <div className="bathroomMap">
                    <BathroomMap bathroom={bathroom} />
                </div>
                <div className="perks">
                    <Perks />
                </div>
            </div>
            <div className="rightColumn">
                <BathroomDetail bathroom={bathroom} />
            </div>
        </div>
    );
};

export default ShowBathroom;
