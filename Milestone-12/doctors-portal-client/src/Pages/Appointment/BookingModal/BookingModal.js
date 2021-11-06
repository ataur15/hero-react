import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ booking, open, handleClose, date, setBookingSuccess }) => {
    const { id, name, time } = booking;
    const { user } = useAuth();
    const initialInfo = { name: user.displayName, email: user.email, phone: '' };
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    // Handle form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // collect data
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        // send data to the server
        fetch(`http://localhost:5000/appointments`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleClose();
                }
            })
    }

    // field data
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setBookingInfo(newInfo);
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <form onSubmit={handleFormSubmit}>
                            <Typography id="transition-modal-title" style={{ marginBottom: '10px' }} variant="h6" component="h2">
                                {name}
                            </Typography>
                            <TextField
                                disabled
                                id="outlined-size-small"
                                sx={{ width: '90%', mb: 2 }}
                                defaultValue={time}
                                size="small"
                            />
                            <TextField
                                disabled
                                id="outlined-size-small"
                                sx={{ width: '90%', mb: 2 }}
                                defaultValue={date.toDateString()}
                                size="small"
                            />
                            <TextField
                                id="outlined-size-small"
                                sx={{ width: '90%', mb: 2 }}
                                defaultValue={user?.displayName}
                                name="name"
                                onBlur={handleOnBlur}
                                size="small"
                            />
                            <TextField
                                id="outlined-size-small"
                                sx={{ width: '90%', mb: 2 }}
                                defaultValue={user?.email}
                                name="email"
                                onBlur={handleOnBlur}
                                size="small"
                            />
                            <TextField
                                id="outlined-size-small"
                                sx={{ width: '90%', mb: 2 }}
                                name="phone"
                                onBlur={handleOnBlur}
                                placeholder="Phone Number"
                                size="small"
                            />
                            <Button type="submit" variant="contained">Submit</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;