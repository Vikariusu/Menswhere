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

    return stores.map((store, storeIndex) => {
      return(
        <StoreCard
          key={store._id}
          {...store}
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
