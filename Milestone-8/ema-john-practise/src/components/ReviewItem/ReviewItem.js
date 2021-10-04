import React from 'react';

const ReviewItem = (props) => {
    const { key, img, name, price, quantity } = props.product;

    return (
        <div className="items-container">
            <div className="item">
                <div className="product-img">
                    <img src={img} alt="" />
                </div>
                <div className="product-info">
                    <h3 className="item-header">{name}</h3>
                    <p>Quantity: {quantity}</p>
                    <p className="price"><b>${price}</b></p>
                    <button onClick={() => props.handleRemove(key)} className="regular-btn">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;