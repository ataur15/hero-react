import React from 'react';
import useAuth from '../../hooks/useAuth';

const Shipping = () => {
    const { user } = useAuth();

    return (
        <div className="max-w-sm m-auto px-4 py-10">
            <h2 className="text-2xl mb-8 text-center">Shipping Address</h2>
            <div>
                <div className="mb-5">
                    <input className="bg-red-50 w-full rounded focus:outline-none py-2 px-3" type="text" value={user?.displayName} placeholder="Name" required />
                </div>
                <div className="mb-5">
                    <input className="bg-red-50 w-full rounded focus:outline-none py-2 px-3" type="email" value={user?.email} placeholder="Email" required />
                </div>
                <div className="mb-5">
                    <input className="bg-red-50 w-full rounded focus:outline-none py-2 px-3" type="text" placeholder="Mobile Number" required />
                </div>
                <div className="mb-5">
                    <input className="bg-red-50 w-full rounded focus:outline-none py-2 px-3" type="text" placeholder="City" required />
                </div>
                <div className="mb-5">
                    <textarea className="bg-red-50 w-full rounded focus:outline-none py-2 px-3" name="" id="" cols="30" rows="3" placeholder="Address"></textarea>
                </div>
                <div className="mb-4">
                    <button type="submit" className="bg-red-500 hover:bg-red-600 w-full rounded text-white text-center py-2 px-3">Continue</button>
                </div>
            </div>
        </div>
    );
};

export default Shipping;