import React, {useState, useEffect} from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom'; // <-- CORRECT IMPORTS
import Communities from './communities/CommunitiesIndex';
import CList from './communities/CList'
import Feed from './communities/Feed'
import '../styles/Home.css';
import '../styles/Sidebar.css';
/* More imports for different pages*/

function Home({user, onLogout}) {

    /* Dependencies and state management can be added here */

    return (
        <div className = "flex Home">
            <Sidebar user={user} onLogout={onLogout} />

            <main className = "flex-1 overflow-auto">
                <Routes>
                    <Route path="/" element={<Communities user={user}/>}> 
                        <Route index element={<CList />} /> 
                        <Route path="Feed" element={<Feed />} /> 
                    </Route>
                    
                    <Route path="Settings" element={<h2>Settings Page Content</h2>} />
                    <Route path="YourBox" element={<h2>Your Box Page Content</h2>} />
                    <Route path="Explore" element={<h2>Explore Page Content</h2>} />
                    <Route path="Profile" element={<h2>Profile Page Content</h2>} />

                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
            </main>
        </div>  
    ); 
}

// NOTE: useLocation and Link are now correctly imported at the top.
// Sidebar (inside Home.jsx)

function Sidebar({user, onLogout}) {
    const location = useLocation();
    
    const tabs = [
        // Path should match the <Route path="..."> above
        { name: "Communities", path: "/", icon: "community-icon" }, 
        { name: "Settings", path: "/Settings", icon: "settings-icon" },
        { name: "Your Box", path: "/YourBox", icon: "box-icon" },
        { name: "Explore", path: "/Explore", icon: "explore-icon" },
        { name: "Profile", path: "/Profile", icon: "profile-icon" }
    ];

    return (
        <nav className="sidebar">
            <ul className = "sidebar-list">
                {tabs.map(tab =>
                    <li key = {tab.path}>
                        {/* Link to the correct path */}
                        <Link to={tab.path} className={location.pathname === tab.path ? "active" : ""}>
                        {tab.name}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>  
    )
}

export default Home;