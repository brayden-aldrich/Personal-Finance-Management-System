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
import UserManager from './userdata';

import { WelcomeCreateAccount, WelcomePleaseLogin } from './pages/WelcomePages';

function App() {

    const accountExists = UserManager.anyAccountExists()
    const isLoggedIn = UserManager.isLoggedIn

    if (!isLoggedIn) {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={accountExists ? <WelcomePleaseLogin /> : <WelcomeCreateAccount />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </Router>

        )
    }

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
