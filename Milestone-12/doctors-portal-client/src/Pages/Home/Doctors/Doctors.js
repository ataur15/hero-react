import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);

    return (
        <div>
            <h2>Our Doctors: {doctors.length}</h2>
            <Container>
                <Grid container spacing={2}>
                    {
                        doctors.map(doctor => <Grid key={doctor._id} item xs={12} sm={6} md={3}>
                            <img width="130" src={`data:image/jpeg;base64,${doctor.image}`} alt="" />
                            <h3>{doctor.name}</h3>
                        </Grid>)
                    }

                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;