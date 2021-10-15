import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    // const { children, ...rest } = props;
    const { user, isLoading } = useAuth();

    /* User er information loading hocche kina ta prothomei check kore nicche,
    Jodi loading hoite thake tahole amra laoding text dekhai dibo */
    if (isLoading) {
        return <div className="text-center py-10 mb-20">
            <button className="btn loading">loading</button>
        </div>
    }

    /* Jokhon user load hoye jabe tokhon children e dhukbe */
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (children) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;