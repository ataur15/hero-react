import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    // const { user, logout } = useFirebase();
    const { user, logout } = useAuth();

    return (
        <div className="text-center my-8">
            <span className="border border-gray-300 mr-3 py-1 px-2"><Link to="/home">Home</Link></span>
            <span className="border border-gray-300 mr-3 py-1 px-2"><Link to="/shipping">Shipping</Link></span>
            <span className="border border-gray-300 mr-3 py-1 px-2"><Link to="/placeorder">Place Order</Link></span>
            <span className="border border-gray-300 mr-3 py-1 px-2"><Link to="/login">Login</Link></span>
            <span className="border border-gray-300 mr-3 py-1 px-2"><Link to="/register">Register</Link></span>
            <span>{user.displayName} </span>
            {user?.email &&
                <span className="bg-gray-300 mr-3 py-1 px-2"><button onClick={logout}>Logout</button></span>
            }
        </div>
    );
};

export default Header;