import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Linksahifa from './pages/Linksahifa/Linksahifa';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Linksahifa" element={<Linksahifa />} />
            </Routes>
        </Router>
    );
}

export default App;
