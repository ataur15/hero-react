import React from 'react';
import heroAbout from '../../../images/home-about.jpg';

const HomeAbout = () => {
    return (
        <div className="common-bg mb-10 md:mb-16">
            <div className="max-w-6xl md:flex justify-between m-auto px-4 py-10 md:py-20">
                <div className="md:max-w-xl pr-0 md:pr-10 mb-4 md:mb-0">
                    <img src={heroAbout} alt="" />
                </div>
                <div className="md:max-w-lg flex flex-col justify-between text-center md:text-left">
                    <div>
                        <h1 className="text-4xl font-bold mb-8">Let us handle your screen <span className="text-pink-600">Professionally</span></h1>
                        <p className="text-gray-500 mb-5">A beauty salon or beauty parlor is an establishment dealing with cosmetic treatments for men and women. There's a difference between a beauty salon and a beauty parlor which is that a beauty salon is a well developed space in a private location, usually having more features than a beauty parlor could have.</p>
                    </div>
                    <div className="flex justify-around md:justify-start">
                        <div className="mr-0 md:mr-20">
                            <h1 className="text-4xl font-bold text-pink-600 mb-4">500+</h1>
                            <p className="font-semibold text-gray-700">Happy Customer</p>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-pink-600 mb-4">40+</h1>
                            <p className="font-semibold text-gray-700">Total Service</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;