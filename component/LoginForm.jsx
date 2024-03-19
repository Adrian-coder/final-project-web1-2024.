// LoginForm.jsx

import React, { useState } from 'react';
import './style/styles.css'; 

const LoginForm = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Logare cu:', username, 'Parolă:', password);
   
  };

  const handleRegister = () => {
    console.log('Navigare către formularul de înregistrare');
   
  };

  return (
    <div className="login-modal">
      <div className="login-content">
        <h2>Logare</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Login:</label>
              <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ color: 'black' }} 
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Parolă:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ color: 'black' }} 
            />
          </div>
          <div className="actions">
            <button type="submit" className="btn login-btn">Logare</button>
            <button type="button" className="btn register-btn" onClick={handleRegister}>Înregistrează-te</button>
            <button type="button" className="btn close-btn" onClick={onClose}>Închide</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
