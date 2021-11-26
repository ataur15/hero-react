import React from 'react';
import { CircularProgress } from '@mui/material';
import { Navigate, Route, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    // console.log(location);

    if (isLoading) {
        return <div style={{ textAlign: 'center', marginTop: '20px' }}><CircularProgress /></div>
    }

    return (
        <div>
            {
                user.email ? children : <Navigate to="/login" state={{ from: location }} />
            }
        </div>
    );
};

export default PrivateRoute;