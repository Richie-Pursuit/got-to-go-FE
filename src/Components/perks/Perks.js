// Perks.jsx

import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import './Perks.scss';

const API = process.env.REACT_APP_API_URL;

const Perks = () => {
    const { id } = useParams();
    const [perk, setPerk] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${API}/perks/${id}`)
            .then((response) => {
                console.log("API Response:", response.data);
                setPerk(response.data[0]);
            })
            .catch((error) => {
                console.warn("Error:", error);
            });
    }, [id]);

    const { accessibility, baby_changing, family_room, open, close, is_public } = perk;

    return (
        <div className="perks">
            {perk && Object.keys(perk).length > 0 ? (
                <div className="perks__grid">
                    <h1 className="title">Perks</h1>
                    <div className="hours-container">
                        <div className="hours">
                            <div className="open">
                                <b>Open:</b> {open}am
                            </div>
                            <div className="vertical-line"></div>
                            <div className="close">
                                <b>Close:</b> {close}pm
                            </div>
                        </div>
                    </div>
                    <div className="perks__accessibility">
                        <b>Accessibility:</b> {accessibility ? 'Yes' : 'No'}
                    </div>
                    <div className="perks__baby_changing">
                        <b>Baby Station:</b> {baby_changing ? 'Yes' : 'No'}
                    </div>
                    <div className="perks__family_room">
                        <b>Family Room:</b> {family_room ? 'Yes' : 'No'}
                    </div>
                    <div className="perks__public">
                        <b>Public:</b> {is_public ? 'Yes' : 'No'}
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Perks;
