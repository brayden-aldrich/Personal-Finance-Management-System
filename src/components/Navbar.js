import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import '../App.scss';

function Navbar() {
  return (
    <nav id="navbar">
      <div className="flex-container">
        <h1 id="title">MyFinancePal</h1>
        <ul className="left">
          <li className="navButton"><NavLink to="/">Expenses</NavLink></li>
          <li className="navButton"><NavLink to="/budget">Budget</NavLink></li>
          <li className="navButton"><NavLink to="/balance">Charts</NavLink></li>
        </ul>
        <ul className="right">
          <li className="navButton"><NavLink to="/login">Login</NavLink></li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;
