import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div className="w-full lg:w-11/12 xl:w-10/12 m-auto py-3 px-4 mb-10 md:mb-20 text-center">
            <h3 className="text-3xl font-medium text-gray-700 mt-6 mb-10">This Rout should be private</h3>
            <p className="mb-2"><Link className="text-xl hover:text-yellow-500" to="/addevent">Add Event</Link></p>
            <p><Link className="text-xl hover:text-yellow-500" to="/volunteer-list">Volunteer List</Link></p>
        </div>
    );
};

export default Admin;