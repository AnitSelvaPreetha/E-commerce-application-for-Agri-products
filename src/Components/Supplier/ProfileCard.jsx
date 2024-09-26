import React from 'react';
import './profileCard.css';

function ProfileCard({ name, phoneNumber, organizationName, image }) {
  return (
    <div className="profile-card">
      <img src={image} alt="Profile" className="profile-image" />
      <div className="profile-details">
        <p>Name: {name}</p>
        <p>Phone Number: {phoneNumber}</p>
        <p>Organization Name: {organizationName}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
