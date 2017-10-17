import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StoreList from './storeList.js';
import sampleStores from './sampleStores.js';
import Navbar from './navbar.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      stores: {},
      // likesCount: 0,
      // commentsCount: 0
    }
  }

  // handleLikesChange = () => {
  //   this.setState({ likesCount: this.state.likesCount + 1});
  // }

  componentDidMount() {
    this.setState({ stores: sampleStores});
  }

  render(){
    return (
      <div>
        <Navbar />
        <StoreList
          stores={this.state.stores}
          likesCount={this.state.likesCount}
          commentsCount={this.state.commentsCount}
          handleLikesChange={this.handleLikesChange}
        />
      </div>
    );
  }
}

export default App;
