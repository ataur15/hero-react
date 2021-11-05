import { Container } from '@mui/material';
import React from 'react';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Container>
                <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
                <AvailableAppointments date={date}></AvailableAppointments>
            </Container>
        </div>
    );
};

export default Appointment;