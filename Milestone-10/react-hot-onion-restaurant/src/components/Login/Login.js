import React, { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { signInWithGoogle, setIsLoading } = useAuth();
    const auth = getAuth();

 
    // After login redirect to the actual location
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    // console.log('Came from', location.state?.from);

    const handleGoogleLogin = () => {
        setIsLoading(true);
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
   
    // Login Mechanism
    const login = () => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    // Observe whether user Auth state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, []);

    // Email Field
    const emailField = (e) => {
        setEmail(e.target.value);
    }

    // Password Field
    const passwordField = (e) => {
        setPassword(e.target.value);
    }


    return (
        <div className="max-w-xs m-auto px-4 py-10">
            <h2 className="text-2xl mb-8 text-center">Please Login</h2>
            <div>
                <p className="text-red-500 mb-4">{error}</p>
                <div className="mb-5">
                    <input onBlur={emailField} className="bg-red-50 w-full rounded focus:outline-none py-2 px-3" type="email" placeholder="Email" required />
                </div>
                <div className="mb-5">
                    <input onBlur={passwordField} className="bg-red-50 w-full rounded focus:outline-none py-2 px-3" type="password" placeholder="Password" required />
                </div>
                <div className="mb-4">
                    <button onClick={login} className="mb-2 bg-red-500 hover:bg-red-600 w-full rounded text-white text-center py-2 px-3">Login</button>
                    <button onClick={handleGoogleLogin} className="bg-yellow-500 w-full hover:bg-yellow-600 rounded text-white text-center py-2 px-3">Google Sign In</button>
                </div>
                <p className="text-center"><Link to="/register" className="text-red-600 hover:text-gray-600">Create a new account</Link></p>
            </div>
        </div>
    );
};

export default Login;