import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <ul>
                    <li><NavLink to="/shop">Shop</NavLink></li>
                    <li><NavLink to="/review">Order Review</NavLink></li>
                    <li><NavLink to="/inventory">Manage Inventory</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;