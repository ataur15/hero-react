import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { id, name, time, space, price } = booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ minWidth: 275, p: '20px' }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            {time}
                        </Typography>
                        <Typography>
                            {space} space available
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            ${price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={handleOpen} variant="contained">Book Appointment</Button>
                    </CardActions>
                </Card>
            </Grid>
            <BookingModal
                booking={booking}
                date={date}
                open={open}
                handleOpen={handleOpen}
                handleClose={handleClose}
                setBookingSuccess={setBookingSuccess}
            >
            </BookingModal>
        </>

    );
};

export default Booking;
