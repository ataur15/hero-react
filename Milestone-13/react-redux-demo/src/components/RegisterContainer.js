import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

const RegisterContainer = () => {
    const [fieldData, setFieldData] = useState({});
    const navigate = useNavigate();
    const { registerUser, authError, isLoading } = useFirebase();


    const handleFormSubmit = (e) => {
        e.preventDefault();
        registerUser(fieldData.email, fieldData.password, fieldData.name, navigate);
    }

    const handleOnBlur = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const newFieldData = { ...fieldData };
        newFieldData[name] = value;
        setFieldData(newFieldData);
    }

    return (
        <div>
            <h1>Register</h1>
            {isLoading &&
                <h3>Loading...</h3>
            }
            {!isLoading &&
                <form onSubmit={handleFormSubmit} action="">
                    <input type="text" onBlur={handleOnBlur} name="name" placeholder="Name" /><br />
                    <input type="email" onBlur={handleOnBlur} name="email" placeholder="Email" /><br />
                    <input type="password" onBlur={handleOnBlur} name="password" placeholder="Password" /><br />
                    <input type="submit" value="Register" />
                </form>
            }
        </div>
    );
};

export default RegisterContainer;