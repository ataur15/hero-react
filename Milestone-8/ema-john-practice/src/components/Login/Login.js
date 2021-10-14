import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/';
    console.log('come from', location.state?.from);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="main">
            <h1>Login</h1>
            <form>
                <div>
                    <div><label htmlFor="Email">Email</label></div>
                    <input type="email" name="" id="" />
                </div>
                <div>
                    <div><label htmlFor="Password">Password</label></div>
                    <input type="password" name="" id="" />
                </div>
                <div>
                    <input className="regular-btn" type="submit" value="Submit" />
                </div>
            </form>
            <div><Link to="/register">Create New Account</Link></div>----OR----
            <div><button onClick={handleGoogleSignIn} className="regular-btn">Google Sign In</button></div>
        </div>
    );
};

export default Login;