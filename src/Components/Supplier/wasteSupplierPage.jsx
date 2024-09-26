// WasteSupplierPage.jsx
import React, { useState } from 'react';
import './wasteSupplierPage.css';
import { Link } from 'react-router-dom';
import AddWasteForm from './AddWasteForm'; // Import the AddWasteForm component

function WasteSupplierPage() {
  const [showForm, setShowForm] = useState(false);

  const handleAddWasteClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/Profile" className="nav-link">Profile</Link>
        <button className="add-waste-button" onClick={handleAddWasteClick}>Add Waste</button>
      </nav>
      <div className="container">
      </div>
      {showForm && <AddWasteForm onClose={handleCloseForm} />}
    </div>
  );
}

export default WasteSupplierPage;

