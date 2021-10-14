import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Shipping = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className="main">
            <h1 className="text-center">Shipping</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div><label>Name</label></div>
                    <input type="text" defaultValue={user.displayName} {...register("First name", { required: true, maxLength: 80 })} />
                </div>
                <div>
                    <div><label>Email</label></div>
                    <input type="text" defaultValue={user.email} {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    <div><p className="error">{errors.email && <span>This field is required</span>}</p></div>
                </div>
                <div>
                    <div><label>Phone Number</label></div>
                    <input type="tel" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
                </div>
                <div>
                    <div><label>Address</label></div>
                    <textarea {...register("Address", { required: true })} />
                </div>
                <p><input type="submit" /></p>
            </form>
        </div>
    );
};

export default Shipping;