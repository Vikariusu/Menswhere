import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StoreCard from './storeCard.js';
import './storeList.css';

class StoreList extends Component {
  render(){
    return (
      <div className="store-list">
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </div>
    );
  }
}

export default StoreList;
