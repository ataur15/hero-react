import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div>
            <h1 className="py-4">Please Login</h1>
            <button onClick={signInWithGoogle} className="btn btn-warning">
                Google Login
            </button>
        </div>
    );
};

export default Login;