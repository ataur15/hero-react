import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';


const services = [
    {
        id: 1,
        name: 'Fluoride Treatment',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi id nemo aliquid. Magni pariatur enim saepe possimus. Optio, dicta vel.',
        img: fluoride
    },
    {
        id: 2,
        name: 'Cavity Filling',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi id nemo aliquid. Magni pariatur enim saepe possimus. Optio, dicta vel.',
        img: cavity
    },
    {
        id: 3,
        name: 'Teath Whitening',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi id nemo aliquid. Magni pariatur enim saepe possimus. Optio, dicta vel.',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Grid>
        </Box>
    );
};

export default Services;