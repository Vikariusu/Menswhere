import React, { Component } from 'react';
import './css/navbar.css';
// import SearchBar from './SearchBar';

class Navbar extends Component{
  displayCity = () => {
    if(this.props.city !== undefined){
      return (
        <div className="city-wrapper">
          <a href={`/city/${this.props.city}`}>Menswhere
            <span className="city-logo">{this.props.city}</span>
          </a>
        </div>
      )
    } else {
        return (
          <a href="/">Menswhere</a>
        )
      }
    }

  render() {
    return (
      <div className="navbar-top">
        <div className="logo">
          {this.displayCity()}
          {/* <a href={`/city/${this.props.city}`}>Menswhere
          <span className="city-logo">{this.props.city}</span></a> */}
        </div>
        {/* <SearchBar changeSearchTerm={this.props.changeSearchTerm} searchTerm={this.props.searchTerm}/> */}
        <div className="navbar-links">
          <a href="/about">About</a>
        </div>
      </div>
    )
  }
}

export default Navbar;
