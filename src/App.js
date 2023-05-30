import React from 'react';
import './App.scss'
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BudgetPage from './pages/BudgetPage.js';
import HomePage from './pages/HomePage.js';
import BalancePage from './pages/BalancePage.js';
import LoginPage from './pages/LoginPage.js';

function App() {
    return (
        <>
            <Router>
                <Navbar></Navbar>
                <div class="global-page-wrapper">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/budget" element={<BudgetPage />} />
                        <Route path="/balance" element={<BalancePage />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
