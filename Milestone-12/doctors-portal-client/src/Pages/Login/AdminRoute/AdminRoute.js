import React from 'react';
import { CircularProgress } from '@mui/material';
import { Navigate, Route, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const AdminRoute = ({ children }) => {
    const { user, isLoading, admin } = useAuth();
    let location = useLocation();

    if (isLoading) {
        return <div style={{ textAlign: 'center', marginTop: '20px' }}><CircularProgress /></div>
    }

    return (
        <div>
            {
                user.email && admin ? children : <Navigate to="/" state={{ from: location }} />
            }
        </div>
    );
};

export default AdminRoute;