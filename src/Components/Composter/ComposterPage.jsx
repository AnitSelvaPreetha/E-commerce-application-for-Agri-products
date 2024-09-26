import React from 'react';
import { Link } from 'react-router-dom';
import './composterPage.css';

const ComposterPage = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="Profile" className="nav-link">Profile</Link>
        <button className="add-fertilizer-button">Add Fertilizer</button>
      </nav>
      <div className="container">
        <h1>Welcome to the Composter Page</h1>
        <p>This is a placeholder for your content.</p>
      </div>
    </div>
  );
}

export default ComposterPage;
