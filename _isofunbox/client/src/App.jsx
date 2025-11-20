import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import './styles/App.css';

// import { API_ENDPOINTS } from '/config/api';

function App() {
    const [user, setUser] = useState({name: "Guest"});

    const handleLogin = (userData) => {
        setUser(userData);
    };

    const handleLogout = () => {
        setUser(null);
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="/*" element={user ? <Home user={user} onLogout={handleLogout} /> : <Navigate to="/login" replace />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;