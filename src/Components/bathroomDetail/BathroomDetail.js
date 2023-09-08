import { useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";
import './BathroomDetail.scss'

const API = process.env.REACT_APP_API_URL;

const BathroomDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    return (
       
        <div className='bathroomDetail'>
            <h1 className = 'bathroomDetail__name'> Bathroom TITLE</h1>
            <div className = 'bathroomDetail__img'>
                <img src = 'https://media.architecturaldigest.com/photos/5d2f3540dea3bc0008636368/16:9/w_2580,c_limit/After-Photo-7.jpg' alt='test'></img>
            </div>
            <div className = 'bathroomDetail__address'>
            Crotona Avenue, East 181 Street
            </div>

        </div>
        
    );
};

export default BathroomDetail;