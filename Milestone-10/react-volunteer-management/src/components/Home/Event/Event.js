import React from 'react';
import { Link } from 'react-router-dom';

const Event = (props) => {
    const { _id, name, desc, date, image } = props.event;

    return (
        <Link to={`/register/${_id}, ${name}`}>
            <div className="mx-auto max-w-sm shadow-xl bg-cover bg-center transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{ backgroundImage: "url(" + `${image}` + ")" }}>
                <div className="bg-black bg-opacity-20 pb-8 px-8 pt-60 flex flex-wrap flex-col hover:bg-opacity-75 transform duration-300">
                    <div className="text-white mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                        <h1 className="text-2xl font-medium mb-1">{name}</h1>
                        <p className="text-xl">{date}</p>
                    </div>
                    <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
                    <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                        {desc?.slice(0, 70)}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Event;