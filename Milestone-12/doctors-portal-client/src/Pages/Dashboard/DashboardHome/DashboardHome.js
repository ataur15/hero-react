import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import AppointmentList from '../AppointmentList/AppointmentList';

const DashboardHome = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12} md={5}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={12} md={7} style={{ marginTop: '20px' }}>
                    <AppointmentList date={date}></AppointmentList>
                </Grid>
            </Grid>
        </div>
    );
};

export default DashboardHome;