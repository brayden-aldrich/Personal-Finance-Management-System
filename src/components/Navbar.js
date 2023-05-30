import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import '../App.scss';

function Navbar() {
  return (
    <nav id="navbar">
      <div className="flex-container">
        <h1 id="title">MyFinancePal</h1>
        <ul class="left">
          <li class="navButton"><NavLink to="/">Home Page</NavLink></li>
          <li class="navButton"><NavLink to="/budget">Budget</NavLink></li>
          <li class="navButton"><NavLink to="/balance">Balance</NavLink></li>
        </ul>
        <ul class="right">
          <li class="navButton"><NavLink to="/login">Login</NavLink></li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;
