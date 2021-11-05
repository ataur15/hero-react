import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyEvents = () => {
    const [myEvents, setMyEvents] = useState([]);
    const { user } = useAuth();

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
        <div className="w-full lg:w-11/12 xl:w-10/12 m-auto mb-10 md:mb-20 py-3 px-4">
            <h3 className="text-3xl text-center font-medium text-gray-700 mt-6 mb-10">My Events</h3>
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
        </div>
    );
};

export default MyEvents;