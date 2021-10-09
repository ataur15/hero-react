import React from 'react';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    // const { signInWithGoogle } = useFirebase();
    const { signInWithGoogle } = useAuth();
    return (
        <div className="w-full max-w-md m-auto text-center">
            <h2 className="text-center py-4 text-2xl font-medium">Please Login</h2>
            <button onClick={signInWithGoogle} className="border border-gray-300 py-1 px-3">Google Sign In</button>
        </div>
    );
};

export default Login;