import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div className="max-w-7xl m-auto py-3 px-4 mt-10 mb-10 md:mb-20 text-center">
            <p className="mb-2"><Link className="text-xl hover:text-yellow-500" to="/addevent">Add Event</Link></p>
            <p><Link className="text-xl hover:text-yellow-500" to="/volunteer-list">Volunteer List</Link></p>
        </div>
    );
};

export default Admin;