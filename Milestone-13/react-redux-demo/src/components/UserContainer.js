import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/user/userActions';

function UserContainer() {
    const usersData = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, []);

    return (
        <div>
            <h2>Users: </h2>
            {
                usersData.loading ? (<h2>Loading</h2>) :
                    usersData.error ? (<h2>{usersData.error}</h2>) :
                        usersData.users && usersData.users.map(user => <p key={user.id}>{user.name}</p>)
            }
        </div>
    )
}

export default UserContainer
