import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState('');


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const user = { email };
        fetch(`http://localhost:5000/users/admin`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setAdminSuccess('User Role Updated');
                    console.log(data);
                }
            })
    }

    const handleOnBlur = (e) => {
        const value = e.target.value;
        console.log(value);
        setEmail(value);
    }

    return (
        <div className="max-w-lg m-auto">
            {
                adminSuccess &&
                <p className="text-lg text-green-600 py-2 mb-3">{adminSuccess}</p>
            }
            <form onSubmit={handleFormSubmit}>
                <input onBlur={handleOnBlur} className="border-0 rounded-l-md focus:outline-none w-8/12 px-3 py-3" type="text" placeholder="Type Email" />
                <button type="submit" className="bg-pink-600 hover:bg-pink-500 rounded-r-md text-white py-3 px-4 -m-2">Add Role</button>
            </form>
        </div>
    );
};

export default MakeAdmin;