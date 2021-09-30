import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchProducts, setSearchProducts] = useState([]);

    useEffect(() => {
        fetch(`./products.JSON`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setSearchProducts(data);
            })
    }, []);

    useEffect(() => {
        if (products.length) {
            const getCart = getStoredCart();
            const savedCart = [];
            for (const key in getCart) {
                const quantity = getCart[key];
                const cartProduct = products.find(product => product.key === key);
                cartProduct["quantity"] = quantity;
                savedCart.push(cartProduct);
            }
            setCart(savedCart);
        }

    }, [products]);

    const handelAddToCart = (product) => {
        const newCart = [...cart, product];
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
            <div className="shop-container">
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
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;