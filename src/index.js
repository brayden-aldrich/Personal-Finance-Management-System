import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ExpenseManager } from './classes/Expense';
import { BudgetManager } from './classes/Budget';
import UserManager from './userdata';


// Load everything from localStorage
ExpenseManager.initFromStorage()
BudgetManager.initFromStorage()
UserManager.initUserManager()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
