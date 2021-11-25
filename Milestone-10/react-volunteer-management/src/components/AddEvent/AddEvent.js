import React from 'react';
import { useForm } from "react-hook-form";

const AddEvent = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(`https://shrouded-cove-47576.herokuapp.com/events`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Event Added');
                    reset();
                }
            })
    };



    return (
        <div className="max-w-7xl m-auto py-3 px-4 mb-10 md:mb-20">
            <div className="max-w-lg m-auto">
                <h3 className="text-3xl text-center font-medium text-gray-700 mt-6 mb-8">Add Event</h3>
                <div className="max-w-sm m-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <input {...register("name")} className="bg-red-50 w-full rounded focus:outline-none py-3 px-3 text-gray-600" placeholder="Title" />
                        </div>
                        <div className="mb-4">
                            <input type="date" {...register("date", {})} className="bg-red-50 w-full rounded focus:outline-none py-3 px-3 text-gray-600" placeholder="Date" />
                        </div>
                        <div className="mb-4">
                            <textarea {...register("desc", { required: true })} className="bg-red-50 w-full rounded focus:outline-none py-3 px-3 text-gray-600" placeholder="Description" cols="30" rows="3"></textarea>
                        </div>
                        <div className="mb-4">
                            <input {...register("image", { required: true })} className="bg-red-50 w-full rounded focus:outline-none py-3 px-3 text-gray-600" placeholder="Image URL" />
                        </div>
                        <div className="mb-4">
                            <button type="submit" className="bg-red-500 hover:bg-red-600 w-full rounded text-white font-medium text-center py-3 px-3">Add Event </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;