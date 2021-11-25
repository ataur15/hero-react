import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';


const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLaoding] = useState(true);

    useEffect(() => {
        fetch('https://shrouded-cove-47576.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
            .finally(() => {
                setLaoding(false)
            })
    }, []);

    return (
        <div className="max-w-7xl m-auto px-4 mb-10 md:mb-20">
            <h1 className="mt-10 md:mt-20 mb-10 text-4xl text-center font-medium text-gray-700">SELECT YOUR EVENTS</h1>
            {loading ?
                <div className="text-center py-6 flex justify-around">
                    <button type="button" className="inline-flex items-center rounded text-lg text-white bg-gray-600 py-2 px-4 cursor-not-allowed" disabled>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing
                    </button>
                </div>
                :
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                    {
                        events.map(event => <Event key={event._id} event={event}></Event>)
                    }
                </div>
            }
        </div>
    );
};

export default Events;