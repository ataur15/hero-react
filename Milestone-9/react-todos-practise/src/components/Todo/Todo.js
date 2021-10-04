import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

const Todo = (props) => {
    // console.log(props);

    const history = useHistory();
    const handleClick = () => {
        history.push(`/todo/${props.id}`);
    }

    return (
        <Grid item xs={2} sm={4} md={4} >
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.id} - {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={handleClick} size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Todo;