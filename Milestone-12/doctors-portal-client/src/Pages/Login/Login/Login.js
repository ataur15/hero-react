import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../../images/login.png'
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, signInWithGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    // Handle Form Submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, navigate)
    }

    // Handle Google SignIn
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    }

    // Filed Data
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(field, value);
    }

    return (
        <Container style={{ marginTop: '30px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ marginTop: '100px' }}>
                    <Typography variant="h5" style={{ marginBottom: '20px' }}>Login</Typography>
                    <form onSubmit={handleFormSubmit}>
                        <TextField
                            id="outlined-size-small"
                            placeholder="Email"
                            name="email"
                            onChange={handleOnChange}
                            sx={{ width: '300px', mb: 2 }}
                            size="small"
                        />
                        <TextField
                            id="outlined-size-small"
                            sx={{ width: '300px', mb: 2 }}
                            placeholder="Password"
                            name="password"
                            onChange={handleOnChange}
                            type='password'
                            size="small"
                        />
                        <div>
                            <Button sx={{ width: '300px', mb: 2 }} type="submit" variant="contained">Login</Button>
                        </div>
                    </form>
                    <div>
                        <Button onClick={handleGoogleSignIn} sx={{ width: '300px', mb: 2 }} type="submit" variant="contained">SignIn With Google</Button>
                    </div>
                    <p style={{ margin: '0px' }}><Link to="/register">Create a new account</Link></p>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginImg} style={{ width: '100%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;