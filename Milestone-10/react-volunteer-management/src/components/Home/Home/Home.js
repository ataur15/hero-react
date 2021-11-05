import React from 'react';
import Banner from '../Banner/Banner';
import Events from '../Events/Events';
import Mission from '../Mission/Mission';
import NewsLetter from '../NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Mission></Mission>
            <Events></Events>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;