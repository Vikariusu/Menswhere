import React, { Component } from 'react';
import StoreCard from './storeCard';
import './css/storeList.css';
import Loader from './loader';

class StoreList extends Component {
  constructor(props) {
    super(props);
    this.state = {width: 0};
  }

  componentWillMount = () => {
    this.updateStoreListWidth();
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.updateStoreListWidth);
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateStoreListWidth);
  }

  updateStoreListWidth = () => {
    const componentWidth = 340 * Math.floor((window.innerWidth)/340);
    this.setState({width: componentWidth });
  }

  renderStores = () => {
    const storesToDisplay = this.filterStoresbySearchTerm();

    return storesToDisplay.map((store, storeIndex) => {
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

  filterStoresbySearchTerm = () => {
    const stores = this.props.stores;
    let searchResults = [];
    console.log(this.props.searchTerm);
    stores.forEach(store => {
      if(store.name.indexOf(this.props.searchTerm) !== -1){
        searchResults.push(store);
      }
    })

    return searchResults;
  }

  render(){
    const width = this.state.width;
    const marginLeft = (window.innerWidth - width)/2 - 10;
    if(this.props.stores.length === 0) {
      return <Loader/>;
    } else {
      return (
        <div>
          {/* style={{width: width, marginLeft: marginLeft}} */}
          <div className="store-list">
            {this.renderStores()}
          </div>
        </div>
      );
    }
  }
}

export default StoreList;
