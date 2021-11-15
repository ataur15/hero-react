import React from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';

const Appointment = () => {
    const { id, serviceName } = useParams();
    const [successMessage, setSuccessMessage] = useState('');
    const { user } = useAuth();
    const initialInfo = { service: serviceName, name: user.displayName, email: user.email, phone: '', date: '', time: '' };
    let [appointmentInfo, setAppointmentInfo] = useState(initialInfo);


    // Handle form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/appointments`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointmentInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccessMessage('Received your appointment');
                    document.getElementById('phone').value = "";
                    document.getElementById('date').value = "";
                    document.getElementById('time').value = "";
                }
            })
    }

    // Handle field data
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...appointmentInfo };
        newInfo[field] = value;
        setAppointmentInfo(newInfo);
    }

    return (

        <div>
            <Header></Header>
            <div className="max-w-6xl m-auto px-4 my-10 md:mb-20">
                <h2 className="text-4xl text-center font-bold mb-2">Get Appointment</h2>
                <div className="max-w-2xl m-auto p-10">
                    {
                        successMessage &&
                        <p className="text-lg bg-green-600 text-white text-center rounded py-2 px-4 mb-6">{successMessage}</p>
                    }
                    <form onSubmit={handleFormSubmit} action="">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                            <div>
                                <label className="text-gray-700 text-lg mb-1 block">Service Name</label>
                                <input onBlur={handleOnBlur} readOnly type="text" name="service" value={serviceName || ''} className="appearance-none border border-gray-300 shadow-sm rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring" placeholder="" />
                            </div>
                            <div>
                                <label className="text-gray-700 text-lg mb-1 block">Name</label>
                                <input onBlur={handleOnBlur} readOnly type="text" name="name" value={user.displayName || ''} className="appearance-none border border-gray-300 shadow-sm rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring" placeholder="" />
                            </div>
                            <div>
                                <label className="text-gray-700 text-lg mb-1 block">Email</label>
                                <input onBlur={handleOnBlur} readOnly type="email" name="email" value={user.email || ''} className="appearance-none border border-gray-300 shadow-sm rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring" placeholder="" />
                            </div>
                            <div>
                                <label className="text-gray-700 text-lg mb-1 block">Phone</label>
                                <input onBlur={handleOnBlur} type="text" name="phone" id="phone" className="appearance-none border border-gray-300 shadow-sm rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring" required placeholder="" />
                            </div>
                            <div>
                                <label className="text-gray-700 text-lg mb-1 block">Date</label>
                                <input onBlur={handleOnBlur} type="date" name="date" id="date" className="appearance-none border border-gray-300 shadow-sm rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring" required placeholder="" />
                            </div>
                            <div>
                                <label className="text-gray-700 text-lg mb-1 block">Time</label>
                                <select onBlur={handleOnBlur} name="time" id="time" className="appearance-none border border-gray-300 shadow-sm rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:ring">
                                    <option>Select Time</option>
                                    <option value="10:00 AM">10:00 AM</option>
                                    <option value="12:00 PM">12:00 PM</option>
                                    <option value="03:00 PM">03:00 PM</option>
                                    <option value="05:00 PM">05:00 PM</option>
                                    <option value="07:00 PM">07:00 PM</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="w-full bg-pink-600 hover:bg-pink-500 text-white text-lg rounded py-2 px-6">Appointment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Appointment;