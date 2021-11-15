import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Dashboard = () => {
    return (
        <div className="max-w-6xl m-auto py-6 px-4 flex">
            <div className="w-64 px-5 py-6">
                <div className="w-40 mb-8">
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <div>
                    <div className="mb-3"><Link className="text-gray-600 hover:text-pink-600 font-medium" to="/dashboard/makeadmin">Make Admin</Link></div>
                </div>
            </div>
            <div className="flex-1 px-5 py-6">
                <div className="mb-10">
                    <h2 className="text-lg">Dashboard</h2>
                </div>
                <div className="bg-green-50 px-5 py-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;