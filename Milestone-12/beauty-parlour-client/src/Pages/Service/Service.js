import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, title, price, desc, image } = service;
    return (
        <div className="shadow-xl hover:shadow-2xl transition p-8 text-center rounded-md">
            <div className="mb-3"><img className="w-24 m-auto" src={image} alt="" /></div>
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-xl text-pink-600 font-semibold mb-2">${price}</p>
            <p className="text-gray-600 mb-5">{desc.slice(0, 100)}...</p>
            <div><Link to={`/appointment/${id},${title}`}><button className="py-3 px-6 rounded bg-pink-600 hover:bg-pink-500 text-white font-medium">Appointment</button></Link></div>
        </div>
    );
};

export default Service;