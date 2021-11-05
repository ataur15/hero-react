import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import loginImg from '../../images/login.png'
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return;
        }

        registerUser(loginData.email, loginData.password);
    }

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
                    <Typography variant="h5" style={{ marginBottom: '20px' }}>Register</Typography>

                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Successfully User Registered</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

                    {!isLoading &&
                        <form style={{ marginTop: '15px' }} onSubmit={handleFormSubmit}>
                            <TextField
                                id="outlined-size-small"
                                placeholder="Name"
                                name="name"
                                onChange={handleOnChange}
                                sx={{ width: '300px', mb: 2 }}
                                size="small"
                            />
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
                            <TextField
                                id="outlined-size-small"
                                sx={{ width: '300px', mb: 2 }}
                                placeholder="Retype Password"
                                name="password2"
                                onChange={handleOnChange}
                                type='password'
                                size="small"
                            />
                            <div>
                                <Button sx={{ width: '300px', mb: 2 }} type="submit" variant="contained">Register</Button>
                            </div>
                            <p style={{ margin: '0px' }}><Link to="/login">Already Registered? Please Login</Link></p>
                        </form>
                    }



                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginImg} style={{ width: '100%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;