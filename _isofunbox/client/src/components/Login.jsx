import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
// import { API_ENDPOINTS } from '../config/api';
import '../styles/LoginScreen.css';

function Login({onLogin}) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const handleSubmit = 
    // const handleSuccessGoogle =

    return (
    <div style={{ background: "white", padding: "20px", borderRadius: "8px" }}>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <button type="submit">Login</button>
          <button
            type="button"
            onClick={onClose}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
        </div>
      </form>
      <hr />
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={() => alert("Google Login Failed")}
      />
    </div>
  );
};

export default Login;

