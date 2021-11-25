import React from 'react';
import { HiOutlineCurrencyDollar, HiOutlineLibrary, HiOutlineHand } from "react-icons/hi";

const Mission = () => {
    return (
        <div className="max-w-7xl m-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="p-10 mx-auto max-w-xl shadow-lg border border-gray-200">
                    <p className="flex justify-center"><span className="text-6xl text-gray-600"><HiOutlineCurrencyDollar /></span></p>
                    <h2 className="text-2xl font-semibold text-gray-600 my-3 text-center">Make a Donation</h2>
                    <p className="text-gray-400 mt-2 text-center">Make a contribution Would you like to make a donation to the library fund? make a donation of food</p>
                </div>
                <div className="p-10 mx-auto max-w-xl shadow-lg border border-gray-2">
                    <p className="flex justify-center"><span className="text-6xl text-gray-600"><HiOutlineLibrary /></span></p>
                    <h2 className="text-2xl font-semibold text-gray-600 my-3 text-center">Homeless Shelter</h2>
                    <p className="text-gray-400 mt-2 text-center">Make a contribution Would you like to make a donation to the library fund? make a donation of food</p>
                </div>
                <div className="p-10 mx-auto max-w-xl shadow-lg border border-gray-2">
                    <p className="flex justify-center"><span className="text-6xl text-gray-600"><HiOutlineHand /></span></p>
                    <h2 className="text-2xl font-semibold text-gray-600 my-3 text-center">Become Volunteer</h2>
                    <p className="text-gray-400 mt-2 text-center">Make a contribution Would you like to make a donation to the library fund? make a donation of food</p>
                </div>
            </div>
        </div>
    );
};

export default Mission;