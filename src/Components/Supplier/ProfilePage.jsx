import React, { useState } from 'react';
import ProfileCard from './ProfileCard'; // Import ProfileCard component
import './profilePage.css';

function ProfilePage() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [image, setImage] = useState(null);
  const [profileUpdated, setProfileUpdated] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfileUpdated(true);
  };

  return (
    <div className="profile-container">
      <h1>Profile Details</h1>
      {profileUpdated ? (
        <div>
          <p className="success-message">Your profile updated successfully!</p>
          <ProfileCard name={name} phoneNumber={phoneNumber} organizationName={organizationName} image={URL.createObjectURL(image)} />
        </div>
      ) : (
        <form className="profile-form" onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
          <br />
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
          <br />
          <input type="text" value={organizationName} onChange={(e) => setOrganizationName(e.target.value)} placeholder="Organization Name" />
          <br />
          <input type="file" onChange={handleImageChange} accept="image/*" />
          <br />
          {image && <img className="profile-image" src={URL.createObjectURL(image)} alt="Profile" />}
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default ProfilePage;
