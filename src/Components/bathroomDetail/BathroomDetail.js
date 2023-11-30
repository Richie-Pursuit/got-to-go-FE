import { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";
import './BathroomDetail.scss'
import ImageUpload from '../imageUpload/ImageUpload';

const API = process.env.REACT_APP_API_URL;

const BathroomDetail = () => {

    const { id } = useParams();
    const [bathroom, setBathroom] = useState([]);
    const navigate = useNavigate();


    useEffect(()=>{
        axios
        .get(`${API}/bathrooms/${id}`)
        .then((response) => {
            console.log(response.data);
            setBathroom(response.data);
          })
          .catch((c) => {
            console.warn("catch", c);
          });
      }, [id]);
 

      const {name, address, image } = bathroom

    return (
        
        <div className='bathroomDetail'>
            <ImageUpload />
            
        <div className='bathroomDetail__grid'>
            <h1 className='bathroomDetail__name'>{name}</h1>
            <div className='bathroomDetail__address'>
                {address}
            </div>
            <div className='bathroomDetail__bio'>
                BIO I didn't end up going to see Regina but speaking with her on the phone was an absolute delight. I called in an emergency when my friend getting married in two days had a terrible experience getting lashes at another salon. Trying…
            </div>
            <div className='bathroomDetail__img'>
            <img src={image} alt='test' />
                {/* <img src='https://media.architecturaldigest.com/photos/5d2f3540dea3bc0008636368/16:9/w_2580,c_limit/After-Photo-7.jpg' alt='test' /> */}
            </div>
        </div>
    </div>
);
};

export default BathroomDetail;