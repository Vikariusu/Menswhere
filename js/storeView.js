import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/storeview.css';
import sampleStore from './sampleStore.js';

class StoreView extends Component {

  // pretend this is hitting the api
  getStoreData(){
    this.setState({ store: sampleStore});
  }

  render(){
    console.log(this.props.match.params.storeId);

    return (
      <div className="storeview-wrapper">
        <p>This is a store view.</p>
      </div>
    );
  }
}

export default StoreView;
