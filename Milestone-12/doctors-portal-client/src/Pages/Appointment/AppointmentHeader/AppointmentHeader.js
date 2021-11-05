import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import chairImg from '../../../images/chair.png';
import Calender from '../../Shared/Calender/Calender';

const AppointmentHeader = ({ date, setDate }) => {
    return (
        <Box sx={{ flexGrow: 1, marginTop: '30px' }}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>
                        Appointment Date
                    </Typography>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={12} md={6} style={{ marginTop: '20px' }}>
                    <img style={{ width: '100%' }} src={chairImg} alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentHeader;