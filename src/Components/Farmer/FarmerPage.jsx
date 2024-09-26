import React from 'react';
import { Link } from 'react-router-dom';
import './farmerPage.css';

const FarmerPage = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="Profile" className="nav-link">Profile</Link>
        <button className="add-agrifoods-button">Add Agrifoods</button>
      </nav>
      <div className="container">
        <h1>Welcome to the Farmer Page</h1>
        <p>This is a placeholder for your content.</p>
      </div>
    </div>
  );
}

export default FarmerPage;
