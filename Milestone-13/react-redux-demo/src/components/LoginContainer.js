import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';


const LoginContainer = () => {
    const [fieldData, setFieldData] = useState({});
    const { loginUser, signInWithGoogle, authError, isLoading } = useFirebase();
    const location = useLocation();
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        loginUser(fieldData.email, fieldData.password, location, navigate);
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
            <h1>Login</h1>
            {isLoading &&
                <h3>Loading...</h3>
            }
            {!isLoading &&
                <form action="" onSubmit={handleFormSubmit}>
                    <input type="email" onBlur={handleOnBlur} name="email" placeholder="Email" /><br />
                    <input type="password" onBlur={handleOnBlur} name="password" placeholder="Password" /><br />
                    <input type="submit" value="Login" />
                </form>
            }
        </div>
    );
};

export default LoginContainer;