import React from 'react';
import Navbar from './navbar.js';
import './css/about.css';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-wrapper">
        <p>Menswhere is a project started in 2017 with one goal: to connect menswear enthusiasts with local brands.</p>

        <p>Your store is not here? Send us an <a href="mailto:veratomaszewska@gmail.com" target="_top">email</a>!</p>

      </div>
    </div>
  )
}

export default About;
