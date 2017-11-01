import React from 'react';
import "./css/homepage.css";

const HomePage = () => {
  return (
    <div className="banner-wrapper">
      <div className="logo-home">Menswhere</div>
        <div className="banner-content">
          I'm looking for menswear in
          <div className="dropdown toggle-cities" style={{display: 'inline-block'}}>
            <button className="btn btn-secondary dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true">
              city
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="/city/Amsterdam">Amsterdam</a>
              <a className="dropdown-item disabled" href="">London</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomePage;
