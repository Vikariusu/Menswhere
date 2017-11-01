import React, { Component } from 'react';
import './css/storeview.css';
import Navbar from './navbar.js';

class StoreView extends Component {
  constructor(props){
    super(props);
    this.state = {storeId: this.props.match.params.storeId};
    this.getStoreData();
  }

  // api call
  getStoreData = () => {
    var request = new XMLHttpRequest();
    request.open('GET', "https://menswhere-api-ygrswjptqh.now.sh/api/stores/" + this.state.storeId, true);
    request.send();

    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        var store = JSON.parse(request.responseText);
        this.setState({...store});
      }
    };
  }

  render(){
    return (
      <div className="storeview-wrapper">
        <Navbar city={this.props.match.params.cityName}/>
        <div className="storeview-content">
          <div className="comments-wrapper">
            <div className="img-view"><img src={this.state.imgUrl} alt=""/></div>
            <div>[ COMMENTS ]</div>
          </div>
          <div className="store-data-wrapper">
            <div className="store-data">
              <h2>{this.state.name}</h2>
              <p>{this.state.address}</p>
              <p>{this.state.description}</p>
            </div>
            <div>[ GOOGLE MAPS ]</div>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreView;
