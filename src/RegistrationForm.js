// RegistrationForm.js

import React, { useState } from 'react';

const RegistrationForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // You can perform further validation here
    // For example, check if the username is already taken

    // Assuming registration is successful
    onRegister(username, password);
    // Clear the form fields
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="new-username">Username:</label>
          <input
            type="text"
            id="new-username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="new-password">Password:</label>
          <input
            type="password"
            id="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
