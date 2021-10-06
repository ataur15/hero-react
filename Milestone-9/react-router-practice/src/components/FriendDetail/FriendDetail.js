import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const [friendDetail, setFriendDetail] = useState({});

    const { id, name, phone, company, address } = friendDetail;

    // console.log(id, name, phone, company?.name);

    /* const params = useParams();
    console.log(params); */

    const { friendId } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
            .then(res => res.json())
            .then(data => setFriendDetail(data))
    }, []);

    const history = useHistory();
    // console.log(history);

    const handleClick = () => {
        history.push(`/friends`);
    }

    return (
        <div>
            <h1>Friend Detail of : {id} </h1>
            <h2>{name}</h2>
            <p>Phone: {phone}</p>
            <p>Work In: {company?.name}</p>
            <p>Live in: {address?.city}</p>
            <button onClick={handleClick}>See All Friends</button>
        </div>
    );
};

export default FriendDetail;