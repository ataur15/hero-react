import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className="max-w-6xl m-auto py-6 px-4 md:flex justify-between items-center">
            <div className="w-40 m-auto md:m-0">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="nav-menu">
                <ul className="text-center md:text-left">
                    <li className="hover:text-pink-500 font-medium text-gray-700 mr-4 mb-2 md:mb-0 md:mr-8"><Link to="/">Home</Link></li>
                    <li className="hover:text-pink-500 font-medium text-gray-700 mr-4 mb-2 md:mb-0 md:mr-8"><Link to="/services">Services</Link></li>
                    <li className="hover:text-pink-500 font-medium text-gray-700 mr-4 mb-2 md:mb-0 md:mr-8"><Link to="#">Contact Us</Link></li>
                    {user.email &&
                        <li className="hover:text-pink-500 font-medium text-gray-700 mr-4 mb-2 md:mb-0 md:mr-8"><Link to="/dashboard">Dashboard</Link></li>
                    }
                    <li className="bg-pink-600 hover:bg-pink-500 text-white font-medium rounded py-2 px-6">
                        {user.email ?
                            <button className="font-medium" onClick={logout}>Logout</button>
                            :
                            <Link to="/login">Login</Link>
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;