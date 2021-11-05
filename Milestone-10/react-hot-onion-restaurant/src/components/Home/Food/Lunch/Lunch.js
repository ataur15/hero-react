import React from 'react';
import { Link } from 'react-router-dom';

const Lunch = (props) => {
    const { id, image, name, price, desc } = props.filterFood
    return (
        <div className="card text-center shadow-xl border">
            <figure className="px-6 pt-6">
                <img src={image} className="rounded-xl" />
            </figure>
            <div className="px-6 pb-6">
                <h2 className="my-3 font-medium text-xl">{name}</h2>
                <p className="mb-3">{desc.slice(0, 70)}</p>
                <p className="font-semibold text-xl mb-4">${price}</p>
                <div className="justify-center">
                    <Link to={`/single/${id}`}><button className="btn bg-red-500 hover:bg-red-600 border-0 text-white">More info</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Lunch;