import React from 'react';
import footer_logo from '../../../images/logo.png';

const Footer = () => {
    return (
        <div className="bg-black">
            <div className="max-w-screen-xl m-auto flex flex-col sm:flex-row items-center justify-between py-8 px-4">
                <div className="w-48 mb-6 md:mb-0"><img src={footer_logo} alt="" /></div>
                <div className="text-center sm:text-left">
                    <span className="text-gray-300 mr-6">About Us</span>
                    <span className="text-gray-300 mr-6">Privacy Policy</span>
                    <span className="text-gray-300 mr-6">Terms & Condition</span>
                    <span className="text-gray-300 mr-6">Contact</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;