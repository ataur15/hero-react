import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [cart, setCart] = useCart();

    const handleRemove = (key) => {
        const newCart = cart.filter(item => item.key !== key);
        setCart(newCart);
    }

    const history = useHistory();
    const handlePlaceOrder = () => {
        setCart([]);
        clearTheCart();
        history.push('/place-order');
    }

    return (
        <div className="main-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}>
                    </ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="regular-btn">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;