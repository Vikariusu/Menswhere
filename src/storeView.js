import React, { Component } from 'react';
import './css/storeview.css';
import Navbar from './navbar.js';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
const API_KEY = 'AIzaSyDxHNlNjDkORT6QR-V6lAav3e5X0nmPlGE';

class StoreView extends Component {
  constructor(props){
    super(props);
    this.state = {
      storeId: this.props.match.params.storeId,
      center: {lat: 52.37, lng: 4.89},
      zoom: 15
    };
    this.getStoreData();
  }

  getCoordinates = () => {
    var request = new XMLHttpRequest();
    request.open('GET', `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.address}&key=${API_KEY}`, true);
    request.send();

    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        var response = JSON.parse(request.responseText);
        this.setState({location: response.results[0].geometry.location});
      }
    };
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
        this.getCoordinates();
      }
    };
  }

  render(){
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={this.state.location}
      >
        {props.isMarkerShown && <Marker position={this.state.location} />}
      </GoogleMap>
    ))

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
            <div id="map">
              <MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreView;
