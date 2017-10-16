import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './storeCard.css';

class StoreCard extends Component {
  render(){
    return(
      <div className="card">
        <div className="card-img">
        </div>
        <h2>Store Name</h2>
        <h5>Address</h5>
        <p>Description</p>
        <div>
          <p>comments</p>
          <p>likes</p>
        </div>
      </div>
    )
  }
}

export default StoreCard;
