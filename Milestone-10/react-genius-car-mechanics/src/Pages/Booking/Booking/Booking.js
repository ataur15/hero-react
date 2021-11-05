import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { bookId } = useParams();
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch(`https://morning-plains-68494.herokuapp.com/services/${bookId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    return (
        <div>
            <h1 className="py-4">Booking of {service.name}</h1>
        </div>
    );
};

export default Booking;