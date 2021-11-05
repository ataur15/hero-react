import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const { name, desc, img } = props.service;
    return (

        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ minWidth: 275, my: 10 }}>
                <CardContent>
                    <Typography sx={{ mb: 2 }} variant="body2" >
                        <img src={img} alt="" />
                    </Typography>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography color="text.secondary">
                        {desc}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>

    );
};

export default Service;