import { useEffect } from "react";
import { useState } from "react";
import { getStoredCart } from "../utilities/fakedb";
import useProducts from "./useProducts";

const useCart = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (products.length) {
            const getCart = getStoredCart();
            const storedCart = [];
            for (const key in getCart) {
                const cartProduct = products.find(product => product.key === key);
                if (cartProduct) {
                    const quantity = getCart[key];
                    cartProduct["quantity"] = quantity;
                    storedCart.push(cartProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products]);

    return [cart, setCart];

}

export default useCart;