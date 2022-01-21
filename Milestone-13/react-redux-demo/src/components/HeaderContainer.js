import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const HeaderContainer = () => {
    const userData = useSelector(state => state.auth);
    console.log(userData);

    return (
        <div>
            <nav>
                <Link style={{ marginRight: '10px' }} to="/">Home</Link>
                <Link style={{ marginRight: '10px' }} to="/users">Users</Link>
                {
                    userData?.user?.email ?
                        <button>Logout</button> :
                        <Link style={{ marginRight: '10px' }} to="/login">Login</Link>
                }
                <Link to="/register">Register</Link>
            </nav>
        </div>
    );
};

export default HeaderContainer;