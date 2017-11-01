import React, { Component } from 'react';
import StoreList from './storeList.js';
import Navbar from './navbar.js';
import './css/app.css';

class App extends Component {
  constructor(props){
    super(props);

    var request = new XMLHttpRequest();
    request.open('GET', "https://menswhere-api-ygrswjptqh.now.sh/api/stores", true);
    request.send();

    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        var stores = JSON.parse(request.responseText);
        this.setState({stores: stores});
      } else {
        console.log("There was an error getting data");
      }
    };

    this.state = {
      stores: []
      // likesCount: 0,
      // commentsCount: 0
    }
  }

  render(){
    return (
      <div className="application-wrapper">
        <Navbar city={this.props.match.params.cityName}/>
        <StoreList
          stores={this.state.stores}
          likesCount={this.state.likesCount}
          handleLikesChange={this.handleLikesChange}
        />
      </div>
    );
  }
}

export default App;
