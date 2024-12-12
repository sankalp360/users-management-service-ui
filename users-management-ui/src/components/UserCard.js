// src/components/UserCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function UserCard({ user }) {
    return (
        <div className="user-card">
            <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
            <h3>{user.firstName} {user.lastName}</h3>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <Link to={`/user/${user.id}`}>View Details</Link>
        </div>
    );
}

export default UserCard;
