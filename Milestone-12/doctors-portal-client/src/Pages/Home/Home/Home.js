import { Container } from '@mui/material';
import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Container>
                <Services></Services>
                <AppointmentBanner></AppointmentBanner>
                <Doctors></Doctors>
            </Container>
        </div>
    );
};

export default Home;