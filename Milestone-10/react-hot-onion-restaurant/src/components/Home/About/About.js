import React from 'react';
import aboutImage from '../../../images/about-image.png';

const About = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-10 md:mb-20">
            <div className="lg:pt-10">
                <h2 className="text-4xl font-semibold text-red-600 mb-4">About the view Restaurant</h2>
                <p className="leading-8 mb-4 text-gray-600">The luxury of outdoor dining is well-experienced right at The View. We are well-versed at combining tradition with invention, comfort food with fine cuisine, and the exotic with the familiar. We are all set to offer an entirely new way to experience Ajman. We have a long list of new menus of bites. All new-bite types are exclusively available at The View throughout the week. Bookmark this one whenever thinking of dining out exclusively at Ajman. We give you a bit more than you expect in an immaculate setting. Ready to own the day? Come to us.</p>
                <button className="bg-red-500 hover:bg-red-600 shadow-lg rounded text-white py-3 px-5">About More</button>
            </div>
            <div>
                <img src={aboutImage} alt="" />
            </div>
        </div>
    );
};

export default About;