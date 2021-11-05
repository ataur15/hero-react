import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';


const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://shrouded-cove-47576.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);

    return (
        <div className="w-full lg:w-11/12 xl:w-10/12 m-auto px-4 mb-10 md:mb-20">
            <h1 className="mt-10 md:mt-20 mb-10 text-4xl text-center font-medium text-gray-700">SELECT YOUR EVENTS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                {
                    events.map(event => <Event key={event._id} event={event}></Event>)
                }
            </div>
        </div>
    );
};

export default Events;