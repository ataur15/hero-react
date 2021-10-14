import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Foods from '../Foods/Foods';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <div className="max-w-screen-xl m-auto px-4 py-10 md:py-20">
                <Foods></Foods>
                <ChooseUs></ChooseUs>
            </div>
        </>
    );
};

export default Home;