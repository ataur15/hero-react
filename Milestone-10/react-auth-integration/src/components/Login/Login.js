import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    // const { signInWithGoogle } = useFirebase();
    const { signInWithGoogle } = useAuth();

    return (
        <div className="w-full max-w-md m-auto text-center">
            <h2 className="text-center py-4 text-2xl font-medium text-blue-600">Please Login</h2>
            <div className="mb-3">
                <button onClick={signInWithGoogle} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Google Sign In
                </button>
            </div>
            <div>
                <Link to="/register">
                    <button className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800">
                        Create New User
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Login;