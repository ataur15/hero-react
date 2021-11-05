import { Container } from '@mui/material';
import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Container>
                <Services></Services>
                <AppointmentBanner></AppointmentBanner>
            </Container>
        </div>
    );
};

export default Home;