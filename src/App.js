import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import LandingPage from "./components/LandingPage";

const App = () => {
    const [userId, setUserId] = useState(localStorage.getItem("userId") || null);

    const handleLogin = (id) => {
        setUserId(id);
        localStorage.setItem("userId", id);
    };

    const handleLogout = () => {
        setUserId(null);
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
    };

    return (
        <Router>
            <Navbar onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<LandingPage userId={userId} />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
};

export default App;
