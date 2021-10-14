import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = (props) => {
    const { children, ...rest } = props;
    const { user, isLoading } = useAuth();

    /* Prothomei check kore nicche, user er information loading hocche kina. Jodi loading hoite thake taile amra laoding text dekhai dibo */
    if (isLoading) {
        return <p className="text-center">Loading....</p>
    }

    /* Jokhon user load hoye jabe tokhon children e dhukbe */
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children :
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                />
            }
        >
        </Route>
    );
};

export default PrivateRoute;