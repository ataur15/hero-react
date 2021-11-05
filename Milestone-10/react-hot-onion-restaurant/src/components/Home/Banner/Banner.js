import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner flex flex-col items-center justify-center">
            <h2 className="text-5xl font-semibold text-center mb-8">Choose your favorite food</h2>
            <div className="w-full text-center px-4">
                <input className="border-0 rounded-l-md focus:outline-none w-9/12 sm:w-96 px-3 py-3" type="text" name="" id="" placeholder="Search food items" />
                <button className="bg-red-500 hover:bg-red-600 rounded-r-md text-white py-3 px-5 -m-2 ">Search</button>
            </div>
        </div>
    );
};

export default Banner;