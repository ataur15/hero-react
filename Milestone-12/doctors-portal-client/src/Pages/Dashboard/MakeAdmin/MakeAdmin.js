import { Button, Grid, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false);
    const { token } = useAuth();

    const handleFormSubmit = (e) => {
        const user = { email };
        fetch(`http://localhost:5000/users/admin`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setAdminSuccess(true);
                    console.log(data);
                }
            })

        e.preventDefault();
    }

    const handleOnBlur = (e) => {
        const value = e.target.value;
        setEmail(value);
    }

    return (
        <div>
            <Grid style={{ margin: '0 auto' }} item xs={12} sm={6} md={4} >
                <h2>Make an admin</h2>
                {adminSuccess && <Alert severity="success">Made Admin Successfully</Alert>}
                <div>
                    <form onSubmit={handleFormSubmit}>
                        <TextField onBlur={handleOnBlur} sx={{ width: '300px' }} size="small" placeholder="Email" />
                        <div style={{ margin: '15px 0' }}><Button type="submit" variant="contained">Make Admin</Button></div>
                    </form>
                </div>
            </Grid>
        </div>
    );
};

export default MakeAdmin;