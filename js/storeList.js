import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StoreCard from './storeCard.js';
import './css/storeList.css';

class StoreList extends Component {
  constructor(props) {
    super(props);
  }

  renderStores = () => {
    const stores = this.props.stores;
    // console.log(stores);

    return Object.keys(stores).map((storeIndex) => {
      return(
        <StoreCard
          key={storeIndex}
          {...stores[storeIndex]}
          index={storeIndex}
          handleLikesChange={this.props.handleLikesChange}
        />
      )
    })
  }

  render(){
    return (
      <div className="store-list">
        {this.renderStores()}
      </div>
    );
  }
}

export default StoreList;
