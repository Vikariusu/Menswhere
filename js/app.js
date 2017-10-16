import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StoreList from './storeList.js';

class App extends Component {
  render(){
    return (
      <div>
        <p>This is a React App.</p>
        <StoreList />
      </div>
    );
  }
}

export default App;
