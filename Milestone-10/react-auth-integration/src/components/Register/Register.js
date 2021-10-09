import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="w-full max-w-sm m-auto">
            <h2 className="text-center py-4 text-2xl font-medium text-blue-600">Please Register</h2>
            <form className="bg-white border border-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="Email">Email</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring" id="email" type="email" required />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="password">Password</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring" id="password" type="password" required />
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Register
                    </button>
                    <Link to="/login">
                        <button className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800">
                            Already Registered?
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Register;