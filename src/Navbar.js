import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (

    <div id="navbar">
        <ul class="left">
            <li><a href="#">Home</a></li>
            <li><a href="#">Budgets</a></li>
            <li><a href="#">Balance</a></li>
        </ul>
        <ul class="right">
                <li><a href="#">Login</a></li>
        </ul>
    </div>
  )
}
