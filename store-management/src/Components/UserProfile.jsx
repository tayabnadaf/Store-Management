import React, { useState } from "react";
import '../Style/UserProfile.css'

function UserProfile() {
  const [user, setUser] = useState({ name: '', email: '' });

  const handleNameChange = (event) => {
    setUser({ ...user, name: event.target.value });
  };

  const handleEmailChange = (event) => {
    setUser({ ...user, email: event.target.value });
  };

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    console.log("Profile updated:", user);
    alert("Profile updated successfully!");
  };

  return (
    <div className="user-profile-container">
      <h1>User Profile</h1>
      <form onSubmit={handleUpdateProfile}>
        <label>
          Name:
          <input
            type="text"
            value={user.name}
            onChange={handleNameChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={user.email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default UserProfile;
