import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link style={{ color: '#ffffff', textDecoration: 'none' }} to="/">
                            <Button color="inherit"> Doctors Portal</Button>
                        </Link>
                    </Typography>
                    <Link style={{ color: '#ffffff', textDecoration: 'none' }} to="/appointment">
                        <Button color="inherit">Appointment</Button>
                    </Link>
                    {user?.email ?
                        <Button onClick={logout} color="inherit">Logout</Button>
                        :
                        <Link style={{ color: '#ffffff', textDecoration: 'none' }} to="/login">
                            <Button color="inherit">Login</Button>
                        </Link>
                    }
                    <Link style={{ color: '#ffffff', textDecoration: 'none' }} to="/register">
                        <Button color="inherit">Register</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;
