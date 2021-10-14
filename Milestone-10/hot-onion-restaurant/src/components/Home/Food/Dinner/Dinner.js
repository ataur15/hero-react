import React from 'react';
import { Link } from 'react-router-dom';

const Dinner = (props) => {
    const { id, image, name, price, desc } = props.filterFood;
    return (
        <div className="card text-center shadow-xl border">
            <figure className="px-6 pt-6">
                <img src={image} className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{desc.slice(0, 70)}</p>
                <p className="font-semibold text-lg mt-4">${price}</p>
                <div className="justify-center card-actions">
                    <Link to={`/single/${id}`}><button className="btn bg-red-500 hover:bg-red-600 border-0 text-white">More info</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Dinner;