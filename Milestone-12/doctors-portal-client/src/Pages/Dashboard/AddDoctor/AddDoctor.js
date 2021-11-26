import React, { useState } from 'react';
import { Grid, Input } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!image) {
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Doctor added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <Grid style={{ margin: "0 auto" }} item xs={12} sm={6} md={4}>
            <h2>Add Doctor</h2>
            <form onSubmit={handleFormSubmit}>
                <TextField
                    id="outlined-size-small"
                    sx={{ width: '90%', mb: 2 }}
                    size="small"
                    onChange={e => setName(e.target.value)}
                    placeholder="Name"
                />
                <TextField
                    id="outlined-size-small"
                    type="email"
                    sx={{ width: '90%', mb: 2 }}
                    size="small"
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <Input
                    accept="image/*"
                    id="contained-button-file"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <div style={{ margin: '20px 0' }}>
                    <Button type="submit" variant="contained">Add Doctor</Button>
                </div>
            </form>
        </Grid>
    );
};

export default AddDoctor;