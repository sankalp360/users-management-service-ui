// src/services/api.js

import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: 'http://localhost:8080/api/',  // Replace with your API URL
});

// Fetch all users
export const fetchUsers = () => api.get('/users');

// Fetch user by ID
export const fetchUserById = (userId) => api.get(`/users/find?id=${userId}`);
// src/services/api.js

// Fetch users by role
export const fetchUsersByRole = (role) => api.get(`/users/role/${role}`);

// Fetch users sorted by age (ascending)
export const fetchUsersSortedByAgeAsc = () => api.get('/users/age/asc');

// Fetch users sorted by age (descending)
export const fetchUsersSortedByAgeDesc = () => api.get('/users/age/desc');

export default api;
