import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName="activeStyle" to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="activeStyle" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="activeStyle" to="/friends">Friends</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;