import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    const { id, name, email, address, company } = props.friend;

    const history = useHistory();
    // console.log(history);

    const handleClick = () => {
        history.push(`friend/${id}`);
    }

    return (
        <div className="friend">
            <h2> {name}</h2>
            <small><b>{email}</b></small>
            <p>I live in {address.city}</p>
            <p>I Work in {company.name}</p>
            <Link to={`friend/${id}`}>Visit Me</Link> <br />
            <Link to={`friend/${id}`}>
                <button>Visit Me</button>
            </Link> <br />
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default Friend;