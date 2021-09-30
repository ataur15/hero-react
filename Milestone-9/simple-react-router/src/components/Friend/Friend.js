import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    const { id, name, phone, website, address } = props.friend;

    const url = `/friend/${id}`;

    let history = useHistory();
    const handleClick = () => {
        // history.push(`/friend/${id}`);
        history.push(url);
    }

    return (
        <div className="friend">
            <h2>I am {name}</h2>
            <h3>Phone {phone}</h3>
            <h3>Website: {website}</h3>
            <h4>I live in {address.city}</h4>
            <Link to={url}>Visit Me</Link> <br />
            <Link to={url}>
                <button>Visit Me2</button>
            </Link> <br />
            <button onClick={handleClick}>Visit Me3</button>
        </div>
    );
};

export default Friend;