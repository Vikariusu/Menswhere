import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-top">
      <div className="logo">Menswhere</div>
      <div className="navbar-links">
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  )
}

export default Navbar;
