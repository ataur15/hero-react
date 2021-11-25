import React from 'react';

const NewsLetter = () => {
    return (
        <div className="max-w-7xl m-auto px-4 mb-10 mb-20">
            <div className="bg-gray-100 py-10 px-6 rounded">
                <div className="w-full md:max-w-4xl m-auto md:flex justify-between items-center">
                    <div className="flex mb-4 md:mb-0">
                        <div className="mr-4">
                            <img src="https://mixmap.travelerwp.com/wp-content/themes/traveler/v2/images/svg/ico_email_subscribe.svg" alt="" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium text-gray-600 mb-1">Get Updates & More</h3>
                            <p className="text-gray-500">Thoughtful thoughts to your inbox</p>
                        </div>
                    </div>
                    <div>
                        <input className="border-0 rounded-l-md focus:outline-none w-8/12 md:w-96 px-3 py-3" type="text" placeholder="Your Email" />
                        <button className="bg-yellow-500 hover:bg-red-600 rounded-r-md text-white py-3 px-4 -m-2">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;