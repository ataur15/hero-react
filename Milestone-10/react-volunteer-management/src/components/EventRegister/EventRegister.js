import React from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const EventRegister = () => {
    const { id, eventName } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch(`https://shrouded-cove-47576.herokuapp.com/volunteer`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Registered');
                    reset();
                }
            })
    };


    return (
        <div className="max-w-7xl m-auto py-3 px-4 mb-10 md:mb-20">
            <h3 className="text-3xl text-center font-medium text-gray-700 mt-6 mb-8">Register as a Volunteer</h3>
            <div className="max-w-sm m-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <input {...register("name")} defaultValue={user?.displayName || ""} className="bg-red-50 w-full rounded focus:outline-none py-3 px-3 text-gray-600" placeholder="Name" />
                    </div>
                    <div className="mb-4">
                        <input {...register("email", { required: true })} defaultValue={user?.email || ""} className="bg-red-50 w-full rounded focus:outline-none py-3 px-3 text-gray-600" placeholder="Email" />
                    </div>
                    <div className="mb-4">
                        <input {...register("event", { required: true })} defaultValue={eventName || ""} className="bg-red-50 w-full rounded focus:outline-none py-3 px-3 text-gray-600" placeholder="Event" />
                    </div>
                    <div className="mb-4">
                        <input type="date" {...register("date", {})} className="bg-red-50 w-full rounded focus:outline-none py-3 px-3 text-gray-600" placeholder="Date" />
                    </div>
                    <div className="mb-4">
                        <textarea {...register("address", { required: true })} className="bg-red-50 w-full rounded focus:outline-none py-3 px-3 text-gray-600" placeholder="Address" cols="30" rows="3"></textarea>
                    </div>
                    <div className="mb-4">
                        <button type="submit" className="bg-red-500 hover:bg-red-600 w-full rounded font-medium text-white text-center py-3 px-3">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EventRegister;