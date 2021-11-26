import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Header from '../Shared/Header/Header';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('../services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .finally(() => {
                setLoading(false);
            })
    }, []);

    return (
        <div>
            <Header></Header>
            <div className="max-w-6xl m-auto px-4 my-10 md:mb-20">
                <h2 className="text-4xl text-center font-bold mb-8">Our Services</h2>
                {loading ?
                    <div className="text-center py-6 flex justify-around">
                        <button type="button" className="inline-flex items-center rounded text-lg text-white bg-pink-600 py-2 px-4 cursor-not-allowed" disabled>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing
                        </button>
                    </div>
                    :
                    <div className="grid grid-col-1 md:grid-cols-3 gap-8 mb-10">
                        {
                            services.map(service => <Service key={service.id} service={service}></Service>)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Services;