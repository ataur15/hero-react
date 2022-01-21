import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.insertedId) {
                    alert('Successfully Service Added');
                    reset();
                }

            })
    };


    return (
        <div className="add-service">
            <h1 className="py-4">Add Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p><input {...register("name", { required: true })} placeholder="Name" /></p>
                <p><textarea {...register("description")} cols="23" rows="4" placeholder="Description"></textarea></p>
                <p><input type="number" {...register("price")} placeholder="Price" /></p>
                <p><input {...register("image", { required: true })} placeholder="Image URL" /></p>
                <p><input type="submit" /></p>
            </form>
        </div>
    );
};

export default AddService;