import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    // Data fetch
    useEffect(() => {
        // console.log("Product API called");
        fetch(`./products.JSON`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
                // console.log("Products received");
            });
    }, []);

    // Get data from the local storage
    useEffect(() => {
        // console.log("Local storage cart called");
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                // console.log(key, savedCart[key]);
                const addedProduct = products.find(product => product.key === key);
                // console.log(key, addedProduct);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    // console.log(addedProduct);
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products]);

    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        // Save to local storage
        addToDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter((product) => {
            if (product.name.toLowerCase().includes(searchText.toLowerCase())) {
                return product;
            }
        });
        // console.log(matchedProducts);
        setDisplayProducts(matchedProducts);
    }

    return (
        <div>
            <div className="search-container">
                <div className="search-bar">
                    <input onChange={handleSearch} type="text" name="" id="" placeholder="Search Product" />
                    <a href="#"><span className="cart-count">0</span></a>
                </div>
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map((product) => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}>
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