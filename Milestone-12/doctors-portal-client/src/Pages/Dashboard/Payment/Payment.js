import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51Jw1yKJ189VmxbXkTUK986eTAImJKC0ObZ56MrM4yzVx0eVAxoAD5aJEHb0vQgKAJAzfNQCJVlgVPblFz4icXxy000a5Ru44ZY')


const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId]);

    return (
        <div>
            <h2>Payment for {appointment.serviceName}</h2>
            <h3>Pay: ${appointment.price}</h3>
            {appointment?.price && 
                <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={appointment}></CheckoutForm>
                </Elements>
            }
        </div>
    );
};

export default Payment;




/**
 * 1. Install stripe-js and react-stripe-js
 * 2. Set publishable key
 * 3. Elements
 * 4. Checkout Form
 * 5. Create payment method
 * 6. Server create payment intent api
 * 7. Load client secret
 * 8. Confirm Card payment
 * 9. Handle user error
 */