import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StoreList from './storeList.js';
import sampleStores from './sampleStores.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      stores: {}
    }
  }

  componentDidMount() {
    this.setState({ stores: sampleStores});
  }

  render(){
    return (
      <div>
        <p>This is a React App.</p>
        <StoreList
          stores={this.state.stores}
        />
      </div>
    );
  }
}

export default App;
