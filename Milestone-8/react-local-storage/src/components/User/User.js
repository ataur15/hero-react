import React from 'react';
import { addToDb, deleteDb } from '../../utilities/local-storage';

const User = (props) => {
    const { _id, name, gender, price } = props.user;

    const handleBuy = id => addToDb(id);

    const handleDelete = id => deleteDb(id)

    // const withParam = (id) => handleBuy(id);

    return (
        <div>
            <h2>Id: {_id}</h2>
            <h3>Name: {name}</h3>
            <h3>Gender: {gender}</h3>
            <h2>Price: ${price}</h2>
            <button onClick={() => handleBuy(_id)}>Buy Now</button>
            <button onClick={() => handleDelete(_id)}>Delete</button>
        </div>
    );
};

export default User;