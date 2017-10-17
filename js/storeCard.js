import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/storeCard.css';

class StoreCard extends Component {
  // handleClick = () => {
  //   this.props.likesCount + 1;
  // }

  render(){
    var cover = {
      // backgroundImage: "url(" + this.props.img + ")"
      backgroundImage: `url(${this.props.image})`,
      height: "200px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    };

    return(
      <div className="card">
        <div className="card-content">
          <div className="card-img-wrapper" style={cover} />
          <h2>{this.props.name}</h2>
          <h5>{this.props.address}</h5>
          <p className="desc">{this.props.desc}</p>
          <div className="card-social">
            <div className="card-social-inner">
              <div className="likes">
                <i className="fa fa-heart-o" aria-hidden="true"></i> likes
              </div>
              <div className="comments">
                <i className="fa fa-comment-o" aria-hidden="true"></i> comments
              </div>
            </div>
            {/* <button onClick={this.props.handleLikesChange}>{this.props.likesCount}</button> */}
            {/* {this.props.commentsCount} */}
          </div>
        </div>
      </div>
    )
  }
}

export default StoreCard;
