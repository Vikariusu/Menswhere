import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-top">
      <div className="logo">Menswhere</div>
      <div className="navbar-links">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  )
}

export default Navbar;
