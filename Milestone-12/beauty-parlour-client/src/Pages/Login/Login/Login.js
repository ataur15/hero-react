import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';

const Login = () => {
    const [fieldData, setFieldData] = useState({});
    const [fieldError, setFieldError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { loginUser, signInWithGoogle, authError, isLoading } = useAuth();

    // Handle form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Basic Validation
        if (fieldData.email === '' || fieldData.password === '') {
            setFieldError('Your field is empty!');
            return;
        } else {
            setFieldError('');
        }

        // Call loginUser function
        loginUser(fieldData.email, fieldData.password, location, navigate);

    }

    // Handle Google Login
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }

    // Handle field data
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newFieldData = { ...fieldData };
        newFieldData[field] = value;
        setFieldData(newFieldData);
        // console.log(newFieldData);
    }

    return (
        <div>
            <Header></Header>
            <div className="max-w-6xl m-auto px-4 my-10 md:mb-20">
                <h2 className="text-4xl text-center font-bold">Login</h2>
                <div className="max-w-sm m-auto p-10">
                    {isLoading &&
                        <div className="text-center py-6 flex justify-around">
                            <button type="button" className="inline-flex items-center rounded text-lg text-white bg-pink-600 py-2 px-4 cursor-not-allowed" disabled>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing
                            </button>
                        </div>
                    }

                    {
                        fieldError &&
                        <p className="text-lg text-red-600 py-3">{fieldError}</p>
                    }
                    {
                        authError &&
                        <p className="text-lg text-red-600 py-3">{authError}</p>
                    }

                    {!isLoading &&
                        <div>
                            <form onSubmit={handleFormSubmit} action="">
                                <div className="mb-4">
                                    <label className="text-gray-700 text-lg mb-1 block">Email</label>
                                    <input onBlur={handleOnBlur} type="email" name="email" className="appearance-none border border-gray-300 shadow-sm rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring" placeholder="" />
                                </div>
                                <div className="mb-5">
                                    <label className="text-gray-700 text-lg mb-1 block">Password</label>
                                    <input onBlur={handleOnBlur} type="password" name="password" className="appearance-none border border-gray-300 shadow-sm rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring" placeholder="" />
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="w-full bg-pink-600 hover:bg-pink-500 text-white text-lg rounded py-2 px-6">Login</button>
                                </div>
                            </form>
                            <div className="mb-3">
                                <button onClick={handleGoogleSignIn} className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-lg rounded py-2 px-6">Sign In with Google</button>
                            </div>
                        </div>
                    }
                    <p className="text-center"><Link className="hover:text-pink-500 text-lg" to="/register">Create a new account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;