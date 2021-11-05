import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import { Button, Typography } from '@mui/material';

const AppointmentBanner = () => {
    return (
        <Box sx={{ flexGrow: 1, marginBottom: '100px' }}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 400 }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} style={{ marginTop: '20px' }}>
                    <Typography variant="h2" style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                        Appointment
                    </Typography>
                    <Typography variant="h4" style={{ marginBottom: '15px' }}>
                        Make an Appointment Today
                    </Typography>
                    <Typography style={{ marginBottom: '15px' }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum quis quae distinctio doloribus nostrum hic. Tempora maxime fugit perspiciatis quas!
                    </Typography>
                    <Button variant="contained">Learn More</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;