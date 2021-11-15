import React, { useState } from 'react';
import { Grid, Typography, Alert } from '@mui/material';
import { Box } from '@mui/system';
import chairImg from '../../../images/chair.png';
import Calender from '../../Shared/Calender/Calender';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '8.00 AM - 9.00 AM',
        price: 20,
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '9.00 AM - 10.00 AM',
        price: 30,
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price: 25,
        space: 12,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 AM',
        price: 45,
        space: 5,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '7.00 AM - 8.00 AM',
        price: 35,
        space: 7,
    }
]

const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <div>
            <Box sx={{ margin: '50px 0' }}>
                <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '30px', textAlign: 'center' }}>
                    Available Appointment on <span style={{ color: '#1976d2' }}>{date.toDateString()}</span>
                </Typography>
                {bookingSuccess && <Alert severity="success">Appointment Booked Successfully</Alert>}
                <Grid container spacing={2}>
                    {
                        bookings.map(booking => <Booking
                            key={booking.id}
                            booking={booking}
                            date={date}
                            setBookingSuccess={setBookingSuccess}
                        >
                        </Booking>)
                    }
                </Grid>
            </Box>
        </div>
    );
};

export default AvailableAppointments;