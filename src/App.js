// App.js

import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import './App.css';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleLogin = (username, password) => {
    const user = registeredUsers.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setLoggedInUser(username);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleRegister = (username, password) => {
    // Check if the username is already taken
    if (registeredUsers.some((user) => user.username === username)) {
      alert('Username already exists');
    } else {
      // Register the new user
      setRegisteredUsers([...registeredUsers, { username, password }]);
      // Automatically log in the user after registration
      setLoggedInUser(username);
      alert(`Registration successful for ${username}`);
    }
  };

  const handleSwitchForm = () => {
    setShowLoginForm((prevShowLoginForm) => !prevShowLoginForm);
  };

  return (
    <div className="App">
      {loggedInUser ? (
        <div>
          <h2>Welcome, {loggedInUser}!</h2>
          <button onClick={() => setLoggedInUser(null)}>Logout</button>
        </div>
      ) : (
        <div>
          {showLoginForm ? (
            <div>
              <LoginForm onLogin={handleLogin} />
              <p>Don't have an account? <button onClick={handleSwitchForm}>Register</button></p>
            </div>
          ) : (
            <div>
              <RegistrationForm onRegister={handleRegister} />
              <p>Already have an account? <button onClick={handleSwitchForm}>Login</button></p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
