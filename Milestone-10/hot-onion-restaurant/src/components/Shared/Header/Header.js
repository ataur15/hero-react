import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo2.png';
import cart_icon from '../../../images/icon/cart.png';
import useAuth from '../../../hooks/useAuth';

const Header = (props) => {
    const { user, logout } = useAuth();

    return (
        <div className="max-w-screen-xl m-auto flex flex-col sm:flex-row items-center justify-between py-5 px-4">
            <div className="mb-4 sm:mb-0"><Link to="/"><img className="w-52" src={logo} alt="" /></Link></div>
            <div className="flex items-center">
                <div className="mr-6 flex">
                    <span className="mr-2"><img src={cart_icon} alt="" /></span> <span>{props.productCount}</span></div>
                <div className="mr-6"><Link to="/">Home</Link></div>
                {user?.email ?
                    <div className="mr-6"><button onClick={logout}>Logout</button></div>
                    :
                    <div className="mr-6"><Link to="/login">Login</Link></div>
                }
                {!user?.email &&
                    <div className="rounded-3xl bg-red-500 hover:bg-red-600 py-1 px-5 text-white"><Link to="/register">Register</Link></div>
                }
            </div>
        </div>
    );
};

export default Header;