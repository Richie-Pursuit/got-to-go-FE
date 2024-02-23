import React from 'react';
import { Link } from 'react-router-dom';
import centralPark from '../../Images/centralPark.jpeg';
import landing2 from '../../Images/landing2.png';
import toilet from '../../Images/toilet.jpeg';

import './LandingPage.scss'; 

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className='park-photos-container'>
        <div className='toilet-image'>
            <img src={toilet} alt="toilet" />
            <div className='toilet-content'>
                <h1 className='toilet-title'>Find Bathrooms</h1>
                <p className='toilet-text'>Find public bathrooms at your fingertips</p>
            </div>
        </div>
        <div className='paired-photos'>
            <img className='landing2' src={landing2} alt="landing2" />
            <img src={centralPark} alt="centralPark" />
        </div>
      </div>
      <section className='second-section-container'>
        <div className='second-section-text'>
            <h2>Navigate to the perfect toilet</h2>
            <p>
      Got2Go features{' '}
      <span style={{ color: 'limegreen' }}>pin point</span>
      {' '}navigation to the toilet of your dreams..
    </p>
        </div>
        <div className='second-section-banner-container'>
        <h2>Got-2-Go? Why wait?</h2>
            <p>Use our optimal search feature to find bathrooms based on name, borough or zipcode.</p>
            <button className='begin-bttn'>Begin Now</button>
        </div>

      </section>

    </div>
  );
};



export default LandingPage;
