import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar.js';
import './css/notFound.css';

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="error-wrapper">Ooops, we couldn't find this page!</div>
    </div>
  )
}

export default NotFound;
