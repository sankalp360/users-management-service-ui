// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import HomePage from './pages/HomePage';
import UserDetailPage from './pages/UserDetailPage';

// Import global styles (optional)
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define the routes for the app */}
        <Routes>
          {/* Route for Home Page, where users are listed in a grid */}
          <Route path="/" element={<HomePage />} />

          {/* Route for User Detail Page */}
          <Route path="/user/:userId" element={<UserDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
