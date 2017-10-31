import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/navbar.css';

class Navbar extends Component{
  render() {
    return (
      <div className="navbar-top">
        <div className="logo">
          <a href={`/city/${this.props.city}`}>Menswhere
          <span className="city-logo">{this.props.city}</span></a>
        </div>
        <div className="navbar-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    )

  }

}

export default Navbar;
