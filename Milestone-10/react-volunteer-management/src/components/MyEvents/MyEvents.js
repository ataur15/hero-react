import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyEvents = () => {
    const [myEvents, setMyEvents] = useState([]);
    const { user } = useAuth();
    const [loading, setLaoding] = useState(true);

    useEffect(() => {
        const email = user.email;
        fetch(`https://shrouded-cove-47576.herokuapp.com/volunteers/byemail`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify([email])
        })
            .then(res => res.json())
            .then(data => setMyEvents(data))
            .finally(() => {
                setLaoding(false)
            })
    }, []);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');

        if (proceed) {
            fetch(`https://shrouded-cove-47576.herokuapp.com/volunteers/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted');
                        const restVolunteer = myEvents.filter(event => event._id !== id);
                        setMyEvents(restVolunteer);
                    }
                })
        }

    }


    return (
        <div className="max-w-7xl m-auto mb-10 md:mb-20 py-3 px-4">
            <h3 className="text-3xl text-center font-medium text-gray-700 mt-6 mb-10">My Events</h3>
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        myEvents.map(myEvent =>
                            <div className="border shadow-lg py-4 px-4" key={myEvent._id}>
                                <h3 className="text-2xl">{myEvent.event}</h3>
                                <p className="my-3 text-lg">{myEvent.date}</p>
                                <button onClick={() => handleDelete(myEvent._id)} className="bg-yellow-500 hover:bg-red-600 text-white rounded py-2 px-4 mr-2">Delete</button>
                            </div>
                        )
                    }

                </div>
            }
        </div>
    );
};

export default MyEvents;