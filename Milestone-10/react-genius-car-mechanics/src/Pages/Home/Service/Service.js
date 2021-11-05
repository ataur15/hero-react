import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, image } = service;
    return (
        <div className="service">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <p>
                <Link to={`/booking/${_id}`}>
                    <button>Book {name.toLowerCase()}</button>
                </Link>
            </p>
        </div>
    );
};

export default Service;