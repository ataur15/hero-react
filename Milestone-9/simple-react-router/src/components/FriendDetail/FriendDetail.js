import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {    
    const [friend, setFriend] = useState({});

    // console.log(useParams());
    const { friendId } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, []);

    const history = useHistory();
    const handleFriendsClick = () => {
        history.push('/friends');
    }

    return (
        <div>
            <h2>Friend detail of: {friendId}</h2>
            <h3>{friend.name}</h3>
            <p>Website: {friend.website}</p>
            <p>Company: {friend.company?.name}</p>
            <button onClick={handleFriendsClick}>See All Friends</button>
        </div>
    );
};

export default FriendDetail;