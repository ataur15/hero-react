import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner mb-10 md:mb-20">
            <div className="w-full lg:w-11/12 xl:w-10/12 m-auto px-4">
                <div className="hero-text w-full sm:max-w-xl m-auto flex flex-col justify-center items-center">
                    <h1>Our Goal is to Help Poor People</h1>
                    <p>Today, we supported the education of 20000 children born in poor families cross 12 undeveloped countries over the world.</p>
                    <div className="text-center"><Link to="/events"><button className="py-3 px-6 rounded bg-yellow-500 hover:bg-red-600 text-white">YOUR EVENTS</button></Link></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;