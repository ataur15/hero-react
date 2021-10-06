import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props);
    let total = 0;
    let quantity = 0;
    for (const item of props.cart) {
        if (!item.quantity) {
            item.quantity = 1;
        }
        quantity = quantity + item.quantity;
        total = total + item.price * item.quantity;
    }

    let shipping = total > 0 ? 20 : 0;
    let grandTotal = total + shipping;

    // let grandTotal = total + shipping;

    return (
        <div>
            <h3>Items Orderd: {quantity}</h3>
            <p>Items: ${total}</p>
            <p>Shipping: ${shipping}</p>
            <h2 className="total">Total: ${grandTotal}</h2>
            <div>{props.children}</div>
        </div>
    );
};

export default Cart;