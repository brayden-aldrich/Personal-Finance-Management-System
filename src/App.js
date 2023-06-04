import React from 'react';
import './App.scss'
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BudgetPage from './pages/BudgetPage.js';
import HomePage from './pages/HomePage.js';
import BalancePage from './pages/BalancePage.js';
import LoginPage from './pages/LoginPage.js';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'

function App() {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterLuxon}>
                <Router>
                    <Navbar></Navbar>
                    <div className="global-page-wrapper">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/budget" element={<BudgetPage />} />
                            <Route path="/balance" element={<BalancePage />} />
                            <Route path="/login" element={<LoginPage />} />
                        </Routes>
                    </div>
                </Router>
            </LocalizationProvider>
        </>
    );
}

export default App;
