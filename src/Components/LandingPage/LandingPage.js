import React from 'react';
import { Link } from 'react-router-dom';
import centralPark from '../../Images/centralPark.jpeg';
import landing2 from '../../Images/landing2.png';
import toilet from '../../Images/toilet.jpeg';
import paper from '../../Images/paper.jpeg';
import './LandingPage.scss'; 

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page__header">
        <div className="banner">
         
          <div className="banner-content">
            <h1>Got2Go</h1>
            <p>Your go-to app for finding bathrooms in NYC!</p>
            <Link to="/bathrooms">
              <button className="get-started-button">Get Started</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="parallax-container">
        <div className="parallax-content">
          <div className="landing-page__section main-image">
            <div className="landing-page__image">
              <img src={landing2} alt="landing2" className="landing-image" />
              <div className="image-overlay">
                <h2>Search for Bathrooms</h2>
                <ul>
                  <li>Find nearby public and private restrooms.</li>
                  <li>Search by borough, name, or zipcode.</li>
                  <li>View precise locations on the map.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="landing-page__section">
            <div className="landing-page__image">
              <img src={toilet} alt="toilet" className="toilet-image" />
              <div className="image-overlay">
                <h2>Benefits of Got2Go</h2>
                <ul>
                  <li>Find nearby public and private restrooms.</li>
                  <li>Search by borough, name, or zipcode.</li>
                  <li>View precise locations on the map.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="landing-page__section">
            <div className="landing-page__image">
              <img src={centralPark} alt="centralPark" className="centralPark-image" />
              <div className="image-overlay">
                <h2>Facts about NYC Bathrooms</h2>
                <ul>
                  <li>NYC is known for its scarcity of public restrooms.</li>
                  <li>Did you know, there are fewer public restrooms in NYC per capita compared to other major cities?</li>
                  <li>Many public restrooms in NYC require you to be a customer to use them.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-page__centered-section">
        <h2 style={{ fontSize: '3rem' }}>How Got2Go Works</h2>
        {/* Add explanation or steps of how the app works */}
      </div>

      {/* Footer */}
      <div className="landing-page__footer">
        <p>Contact Us</p>
        {/* Add contact information or links */}
      </div>
    </div>
  );
};


export default LandingPage;