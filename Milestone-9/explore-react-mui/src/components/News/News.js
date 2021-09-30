import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const News = (props) => {
    const { title, urlToImage, description } = props.article;

    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                component="img"
                height="200"
                image={urlToImage}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default News;