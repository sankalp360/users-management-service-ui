// src/pages/UserDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserById } from '../services/api';
import '../css/UserDetailPage.css';

function UserDetailPage() {
    const { userId } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUserById(userId)
            .then(response => setUser(response.data))
            .catch(error => console.error('Error fetching user:', error));
    }, [userId]);

    if (!user) return <div>Loading...</div>;

    return (
        <div className="user-detail-page">
            <h1>User Details</h1>
            <div className="user-detail-container">
                {/* Profile Picture and Name */}
                <div className="user-profile">
                    <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
                    <h2>{user.firstName} {user.lastName}</h2>
                    <p className="user-role">{user.role}</p>
                </div>

                {/* Personal Information */}
                <div className="user-section">
                    <h3>Personal Information</h3>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Gender:</strong> {user.gender}</p>
                    <p><strong>Age:</strong> {user.age}</p>
                    <p><strong>Birth Date:</strong> {user.birthDate}</p>
                    <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
                    <p><strong>Eye Color:</strong> {user.eyeColor}</p>
                    <p><strong>Hair:</strong> {user.hair.color}, {user.hair.type}</p>
                </div>

                {/* Address */}
                <div className="user-section">
                    <h3>Address</h3>
                    <p>{user.address.address}</p>
                    <p>{user.address.city}, {user.address.state} ({user.address.postalCode})</p>
                    <p>{user.address.country}</p>
                </div>

                {/* Company Details */}
                <div className="user-section">
                    <h3>Company Details</h3>
                    <p><strong>Title:</strong> {user.company.title}</p>
                    <p><strong>Department:</strong> {user.company.department}</p>
                    <p><strong>Company:</strong> {user.company.name}</p>
                    <p><strong>Address:</strong> {user.company.address.address}, {user.company.address.city}</p>
                </div>

                {/* Bank Details */}
                <div className="user-section">
                    <h3>Bank Details</h3>
                    <p><strong>Card Type:</strong> {user.bank.cardType}</p>
                    <p><strong>Card Number:</strong> {user.bank.cardNumber}</p>
                    <p><strong>Currency:</strong> {user.bank.currency}</p>
                </div>
            </div>
        </div>
    );
}

export default UserDetailPage;
