import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/storeview.css';
// import sampleStore from './sampleStore.js';
import Navbar from './navbar.js';

class StoreView extends Component {
  constructor(props){
    super(props);
    console.log(props);
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
        console.log(store);
        this.setState({...store});
      } else {
        console.log("There was an error getting data");
      }
    };
  }

  render(){
    // console.log(this.props.match.params.cityName);

    return (
      <div className="storeview-wrapper">
        <Navbar city={this.props.match.params.cityName}/>
        {/* <a href={`/city/${this.props.match.params.cityName}`} className="store-navigation">Back</a> */}
        <div className="storeview-content">
          <div className="comments-wrapper">
            <div className="img-view"><img src={this.state.imgUrl} /></div>
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
