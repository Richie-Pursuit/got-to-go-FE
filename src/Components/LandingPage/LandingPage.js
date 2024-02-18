import React from 'react';
import { Link } from 'react-router-dom';
import centralPark from '../../Images/centralPark.jpeg';
import landing2 from '../../Images/landing2.png';
import toilet from '../../Images/toilet.jpeg';
import paper from '../../Images/paper.jpeg';
import './LandingPage.scss'; 

const LandingPage = () => {
  return (
    <div className='landing-page'>
      {/* <div>
        <h1>Got2Go</h1>
        <p>Your go-to app for finding bathrooms in NYC!</p>
        <Link to="/bathrooms">
          <button>Get Started</button>
        </Link>
      </div> */}
      <div className='park-photos-container'>
        <div className='toilet-image'>
            <img src={toilet} alt="toilet" />
        </div>
        <div className='paired-photos'>
            <img className='landing2' src={landing2} alt="landing2" />
            <img src={centralPark} alt="centralPark" />
        </div>
   
        
        {/* <div>
          <h2>Search for Bathrooms</h2>
          <ul>
            <li>Find nearby public and private restrooms.</li>
            <li>Search by borough, name, or zipcode.</li>
            <li>View precise locations on the map.</li>
          </ul>
        </div> */}
      </div>

    </div>
  );
};


export default LandingPage;
