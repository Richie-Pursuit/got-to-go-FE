import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.jpg'; // Import the logo image
import logo2 from '../../Images/logo2.jpg'; // Import the second logo image
import './NavBar.scss';
import BathroomSearchBar from '../bathroomSearchBar/BathroomSearchBar';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        {/* Logo and title */}
        <Link to='/bathrooms' className='navbar-logo'>
          <div className='logo-container'>
            <img src={logo} alt='Logo' className='logo-image' />
            <img src={logo2} alt='Logo2' className='logo-image logo-image2' />
          </div>
        </Link>

        {/* Integrated SearchBar inside NavBar */}
        <div className='search-bar'>
          <BathroomSearchBar />
        </div>

        <ul className='navbar-menu'>
          <li className='navbar-item'>
            <Link to='/bathrooms/new' className='navbar-link'>
              <span className='add-new-button'>+</span>
            </Link>
          </li>
          {/* Add more menu items here */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
