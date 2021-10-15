import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import initAuthentication from '../../firebase/firebase.init';

initAuthentication();

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();

    // Handle Form Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        register();
    }

    // Register
    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setUserName();
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    // Set Name
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        }).catch((error) => {

        });
    }

    const nameField = (e) => {
        setName(e.target.value);
    }

    const emailField = (e) => {
        setEmail(e.target.value);
    }

    const passwordField = (e) => {
        setPassword(e.target.value);
    }

    /* const confirmPasswordField = (e) => {
        setConfirmPassword(e.target.value);
    } */


    return (
        <div className="max-w-xs m-auto px-4 py-10">
            <h2 className="text-2xl mb-8 text-center">Please Register</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <p className="text-red-500 mb-4">{error}</p>
                    <div className="mb-5">
                        <input onBlur={nameField} className="bg-red-50 w-full rounded focus:outline-none py-2 px-3" type="text" placeholder="Name" required />
                    </div>
                    <div className="mb-5">
                        <input onBlur={emailField} className="bg-red-50 w-full rounded focus:outline-none py-2 px-3" type="email" placeholder="Email" required />
                    </div>
                    <div className="mb-5">
                        <input onBlur={passwordField} className="bg-red-50 w-full rounded focus:outline-none py-2 px-3" type="password" placeholder="Password" required />
                    </div>
                    {/* <div className="mb-5">
                        <input onBlur={confirmPasswordField} className="bg-red-50 w-full rounded focus:outline-none py-2 px-3" type="password" placeholder="Confirm Password" />
                    </div> */}
                    <div className="mb-4">
                        <button type="submit" className="bg-red-500 hover:bg-red-600 w-full rounded text-white text-center py-2 px-3">Create Account</button>
                    </div>
                </form>
                <p className="text-red-600 text-center"><Link to="/login">Already have an account?</Link></p>
            </div>
        </div>
    );
};

export default Register;