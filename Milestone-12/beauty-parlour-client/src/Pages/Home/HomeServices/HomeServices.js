import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';

const HomeServices = () => {
    const [homeServices, setHomeServices] = useState([]);

    useEffect(() => {
        fetch('../services.json')
            .then(res => res.json())
            .then(data => setHomeServices(data))
    }, []);

    return (
        <div className="max-w-6xl m-auto px-4 my-10 md:mt-16 md:mb-20">
            <h2 className="text-4xl text-center font-bold mb-8">Our Services</h2>
            <div className="grid grid-col-1 md:grid-cols-3 gap-8 mb-10">
                {
                    homeServices.slice(0, 3).map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default HomeServices;