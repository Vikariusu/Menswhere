import React, { Component } from 'react';
import StoreCard from './storeCard';
import './css/storeList.css';
import Loader from './loader';

class StoreList extends Component {
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
      );
    });
  }

  render(){
    if(this.props.stores.length === 0) {
      return <Loader/>;
    } else {
      return (
        <div className="store-list">
          {this.renderStores()}
        </div>
      );
    }
  }
}

export default StoreList;
