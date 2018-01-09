import React, { Component } from 'react';
import StoreList from './storeList.js';
import Navbar from './navbar.js';
import FilterOptions from './filterOptions.js';
// import SearchBar from './SearchBar';
import './css/app.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      stores: [],
      searchTerm: ""
      // likesCount: 0,
      // commentsCount: 0
    }

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
  }

  changeSearchTerm = (input) => {
    // change search term coming from the searchbar
    this.setState({ searchTerm: input });

    // sort by searchTerm
    // let Searchedstores = this.state.stores.forEach((store) => {
    //   if(store.name.indexOf(input) === -1){
    //     return stores;
    //   } else {
    //
    //   }
    // })
  }

  sortStoresLikes = () => {
    let sortedStores = this.state.stores.concat().sort(function(firstStore, secondStore) {
      if(firstStore.likes > secondStore.likes){
        return -1;
      } else {
        return 1;
      }
    });
    this.setState({stores: sortedStores});
  }

  sortStoresNames = () => {
    let sortedStores = this.state.stores.concat().sort(function(a, b) {
      let storeA = a.name.toLowerCase(), storeB = b.name.toLowerCase();

      if(storeA > storeB){
        return 1;
      } else {
        return -1;
      }
    });
    this.setState({stores: sortedStores});
  }

  render(){
    return (
      <div className="application-wrapper">
        <Navbar city={this.props.match.params.cityName} searchTerm={this.state.searchTerm} changeSearchTerm={this.changeSearchTerm} />
        <div className="sort-options">Sort by: <span onClick={this.sortStoresLikes}>likes</span> | <span onClick={this.sortStoresNames}>name</span></div>
        <div className="stores-wrapper">
          <FilterOptions />
          <StoreList
            stores={this.state.stores}
            likesCount={this.state.likesCount}
            handleLikesChange={this.handleLikesChange}
            searchTerm={this.state.searchTerm}
          />
        </div>
      </div>
    );
  }
}

export default App;
