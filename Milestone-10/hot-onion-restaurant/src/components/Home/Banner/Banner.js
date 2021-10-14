import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner flex flex-col items-center justify-center">
            <h2 className="text-5xl font-semibold text-center mb-8">Choose your favorite food</h2>
            <div>
                <input className="border-0 rounded-l-md focus:outline-none sm:w-96 px-3 py-2" type="text" name="" id="" placeholder="Search food items" />
                <button className="py-2 px-4 -m-2 bg-red-500 hover:bg-red-600 rounded-r-md text-white">Search</button>
            </div>
        </div>
    );
};

export default Banner;