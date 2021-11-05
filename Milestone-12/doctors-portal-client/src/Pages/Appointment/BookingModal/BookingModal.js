import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

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

const BookingModal = ({ booking, handleOpen, open, handleClose, date }) => {
    const { id, name, time, space } = booking;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('Submitted');

        handleClose();
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
                                defaultValue="Name"
                                size="small"
                            />
                            <TextField
                                id="outlined-size-small"
                                sx={{ width: '90%', mb: 2 }}
                                defaultValue="Email"
                                size="small"
                            />
                            <TextField
                                id="outlined-size-small"
                                sx={{ width: '90%', mb: 2 }}
                                defaultValue="Phone Number"
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