import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Shipping = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="main">
            <h1>Shipping</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div><label>Name</label></div>
                    <input defaultValue={user.displayName} {...register("name")} />
                </div>
                <div>
                    <div><label>Email</label></div>
                    <input defaultValue={user.email} {...register("email", { required: true })} />
                </div>
                <div><p className="error">{errors.email && <span>This field is required</span>}</p></div>
                <div>
                    <div><label>Address</label></div>
                    <input {...register("address")} />
                </div>
                <div>
                    <div><label>City</label></div>
                    <input {...register("city")} />
                </div>
                <div>
                    <div><label>Phone Number</label></div>
                    <input {...register("Phone Number")} />
                </div>
                <p><input type="submit" /></p>
            </form>
        </div>
    );
};

export default Shipping;