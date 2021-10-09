import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemove = (key) => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const history = useHistory();

    const handlePlaceOrder = () => {
        // setCart([]);
        // clearTheCart();
        history.push('/shipping');
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
                    <div><button onClick={handlePlaceOrder} className="regular-btn">Proceed to shipping</button></div>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;