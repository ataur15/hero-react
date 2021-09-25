import React from 'react';
import Rating from 'react-rating';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { img, name, price, stock, seller, star } = props.product;

    return (
        <div className="items-container">
            <div className="item">
                <div className="product-img">
                    <img src={img} alt="" />
                </div>
                <div className="product-info">
                    <h3 className="item-header">{name}</h3>
                    <p>by: {seller}</p>
                    <p className="instock">In Stock: {stock}</p>
                    <p className="price"><b>${price}</b></p>
                    <div>
                        <Rating
                            initialRating={star}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly
                        />
                    </div>
                    <button onClick={() => props.handelAddToCart(props.product)} className="cart-btn">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;