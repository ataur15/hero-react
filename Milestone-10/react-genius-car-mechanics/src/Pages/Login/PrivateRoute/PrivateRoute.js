import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    /* user er information loading hocche kina eita prothomei check kore nicche. Jodi loading obosthay thake tahole amra laoding text dekhai dibo */
    if (isLoading) {
        return <p className="py-4"><Spinner animation="border" variant="primary" /></p>;
    }

    /* Jokhon user load hoye jabe tokhon children e dhukbe */
    return (
        <Route
            /* private route a joto props thakbe sobgula ke route e pathai dibo. Etai hocce ...rest er kaj */
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
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