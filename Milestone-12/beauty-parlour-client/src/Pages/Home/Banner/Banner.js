import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../../images/hero.jpg';
import Header from '../../Shared/Header/Header';

const Banner = () => {
    return (
        <div className="common-bg pb-8">
            <Header></Header>
            <div className="max-w-6xl m-auto py-4 px-4 md:flex justify-between">
                <div className="md:max-w-lg flex flex-col justify-center text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-5xl leading-tight font-bold mb-4">BEAUTY PARLOUR FOR WOMEN</h1>
                    <p className="text-gray-500 mb-5">A beauty salon or beauty parlor is an establishment dealing with cosmetic treatments for men and women. There's a difference between a beauty salon and a beauty parlor which is that a beauty salon is a well developed space in a private location, usually having more features than a beauty parlor could have.</p>
                    <div className="text-center md:text-left">
                        <Link to="/services">
                            <button className="py-3 px-6 rounded bg-pink-600 hover:bg-pink-500 text-white font-medium">OUR SERVICES</button>
                        </Link>
                    </div>
                </div>
                <div className="md:max-w-lg">
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;