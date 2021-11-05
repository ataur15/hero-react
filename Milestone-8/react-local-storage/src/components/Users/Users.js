import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`./users.json`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    return (
        <div>
            <h1>Users</h1>
            {
                users.map(user => <User key={user._id} user={user}></User>)
            }
        </div>
    );
};

export default Users;