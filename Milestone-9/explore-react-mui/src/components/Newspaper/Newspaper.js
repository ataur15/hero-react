import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect, useState } from 'react';
import News from '../News/News';

const Newspaper = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=tesla&from=2021-08-27&sortBy=publishedAt&apiKey=c27b6b4f7934485ba6fb05ee110c49b0`)
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, []);

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        articles.map(article => <News article={article}></News>)
                    }
                </Grid>
            </Box>
        </div>
    );
};

export default Newspaper;