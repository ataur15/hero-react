import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Header from '../Shared/Header/Header';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('../services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <Header></Header>
            <div className="max-w-6xl m-auto px-4 my-10 md:mb-20">
                <h2 className="text-4xl text-center font-bold mb-8">Our Services</h2>
                <div className="grid grid-col-1 md:grid-cols-3 gap-8 mb-10">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;