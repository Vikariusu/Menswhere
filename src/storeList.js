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
    const stores = this.props.stores;

    return stores.map((store, storeIndex) => {
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

  render(){
    const width = this.state.width;
    const marginLeft = (window.innerWidth - width)/2 - 10;
    if(this.props.stores.length === 0) {
      return <Loader/>;
    } else {
      return (
        <div>
          <div className="store-list" style={{width: width, marginLeft: marginLeft}}>
            {this.renderStores()}
          </div>
        </div>
      );
    }
  }
}

export default StoreList;
