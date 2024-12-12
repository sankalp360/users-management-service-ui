import React, { useState, useEffect } from 'react';
import UserGrid from '../components/UserGrid';
import {
    fetchUsers,
    fetchUsersByRole,
    fetchUsersSortedByAgeAsc,
    fetchUsersSortedByAgeDesc,
} from '../services/api';
import '../css/HomePage.css';

function HomePage() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedRole, setSelectedRole] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    // Fetch all users on initial load
    useEffect(() => {
        fetchUsers()
            .then((response) => {
                setUsers(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
                setIsLoading(false);
            });
    }, []);

    // Handle Role Filter
    const handleRoleChange = (event) => {
        const role = event.target.value;
        setSelectedRole(role);
        setIsLoading(true);
        if (role === '') {
            fetchUsers()
                .then((response) => setUsers(response.data))
                .catch((error) => console.error('Error fetching users:', error))
                .finally(() => setIsLoading(false));
        } else {
            fetchUsersByRole(role)
                .then((response) => setUsers(response.data))
                .catch((error) => console.error('Error fetching users:', error))
                .finally(() => setIsLoading(false));
        }
    };

    // Handle Age Sorting
    const handleSortChange = (event) => {
        const order = event.target.value;
        setSortOrder(order);
        setIsLoading(true);
        const fetchSortedUsers =
            order === 'asc'
                ? fetchUsersSortedByAgeAsc
                : order === 'desc'
                    ? fetchUsersSortedByAgeDesc
                    : fetchUsers;

        fetchSortedUsers()
            .then((response) => setUsers(response.data))
            .catch((error) => console.error('Error fetching users:', error))
            .finally(() => setIsLoading(false));
    };

    return (
        <div className="home-page">
            <h1>User Management</h1>

            {/* Filter Section */}
            <div className="filter-container">
                <label htmlFor="role-filter">Role:</label>
                <select
                    id="role-filter"
                    value={selectedRole}
                    onChange={handleRoleChange}
                    className="filter-dropdown"
                >
                    <option value="">All Roles</option>
                    <option value="admin">Admin</option>
                    <option value="moderator">Moderator</option>
                    <option value="user">User</option>
                </select>

                <label htmlFor="sort-filter">Sort by Age:</label>
                <select
                    id="sort-filter"
                    value={sortOrder}
                    onChange={handleSortChange}
                    className="filter-dropdown"
                >
                    <option value="">Default</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>

            {/* Loading Indicator */}
            {isLoading ? (
                <div className="loading-spinner">Loading...</div>
            ) : (
                <UserGrid users={users} />
            )}
        </div>
    );
}

export default HomePage;
