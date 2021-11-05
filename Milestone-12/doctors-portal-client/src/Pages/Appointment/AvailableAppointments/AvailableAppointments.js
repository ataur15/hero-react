import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import chairImg from '../../../images/chair.png';
import Calender from '../../Shared/Calender/Calender';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '8.00 AM - 9.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '9.00 AM - 10.00 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 12,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 AM',
        space: 5,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '7.00 AM - 8.00 AM',
        space: 7,
    }
]

const AvailableAppointments = ({ date }) => {
    return (
        <div>
            <Box sx={{ margin: '50px 0' }}>
                <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '30px', textAlign: 'center' }}>
                    Available Appointment on {date.toDateString()}
                </Typography>
                <Grid container spacing={2}>
                    {
                        bookings.map(booking => <Booking key={booking.id} booking={booking} date={date}></Booking>)
                    }
                </Grid>
            </Box>
        </div>
    );
};

export default AvailableAppointments;