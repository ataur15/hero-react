import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart();
    const [searchProducts, setSearchProducts] = useState([]);

    useEffect(() => {
        fetch(`./products.JSON`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setSearchProducts(data);
            })
    }, []);

    const handelAddToCart = (product) => {
        const newCart = [...cart, product];
        console.log(newCart);

        setCart(newCart);
        addToDb(product.key);
    }

    const handleSearch = (event) => {
        const searchText = event.target.value;
        const searchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setSearchProducts(searchProducts);
    }

    return (
        <div>
            <div className="search-container">
                <div className="search-bar">
                    <input onChange={handleSearch} type="text" name="" id="" placeholder="Search Product" />
                </div>
            </div>
            <div className="main-container">
                <div className="product-container">
                    {
                        searchProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handelAddToCart={handelAddToCart}
                        >
                        </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review"><button className="regular-btn">Order Review</button></Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;