import React from 'react';
import { Link } from "react-router-dom"
import './NavBar.scss'


const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/bathrooms' className='navbar-logo'>
                    Your Logo
                </Link>
                <ul className='navbar-menu'>
                    <li className='navbar-item'>
                        <Link to='/bathrooms/1"' className='navbar-link'>
                            Bathroom
                        </Link>
                    </li>
                    {/* Add more menu items here */}
                </ul>
            </div>
        </nav>
    );
};
export default NavBar;