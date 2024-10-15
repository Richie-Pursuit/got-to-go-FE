import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import './Perks.scss';

const API = process.env.REACT_APP_API_URL;

const Perks = () => {
    const { id } = useParams();
    const [perk, setPerk] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPerk = async () => {
            try {
                const response = await axios.get(`${API}/perks/${id}`);
                setPerk(response.data[0]);
            } catch (err) {
                console.error("Error fetching perk:", err);
                setError("Failed to load perk information. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchPerk();
    }, [id]);

    if (loading) return <div className="perks__loading">Loading...</div>;
    if (error) return <div className="perks__error">{error}</div>;
    if (!perk) return <div className="perks__not-found">Perk information not found.</div>;

    const { accessibility, baby_changing, family_room, open, close, is_public } = perk;

    return (
        <div className="perks">
            <h1 className="perks__title">Bathroom Perks</h1>
            <div className="perks__grid">
                <div className="perks__hours">
                    <h2>Operating Hours</h2>
                    <p>Open: {open}:00 AM - Close: {close}:00 PM</p>
                </div>
                <div className="perks__features">
                    <h2>Features</h2>
                    <ul>
                        <li className={accessibility ? 'available' : 'unavailable'}>
                            <span className="icon">♿</span> Accessibility
                        </li>
                        <li className={baby_changing ? 'available' : 'unavailable'}>
                            <span className="icon">👶</span> Baby Changing Station
                        </li>
                        <li className={family_room ? 'available' : 'unavailable'}>
                            <span className="icon">👨‍👩‍👧‍👦</span> Family Room
                        </li>
                        <li className={is_public ? 'available' : 'unavailable'}>
                            <span className="icon">🏢</span> Public Access
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Perks;
