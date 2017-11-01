import React, { Component } from 'react';
import './css/storeCard.css';

class StoreCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      likesCount: this.props.likes,
      liked: false,
      likedClass: 'fa fa-heart-o'
    }
  }

  toggleLike = () => {
    if(this.state.liked === false) {
      this.setState({liked: true});
      this.setState({likesCount: this.state.likesCount + 1});
      this.setState({likedClass: 'fa fa-heart'});
    } else {
      this.setState({liked: false});
      this.setState({likesCount: this.state.likesCount - 1});
      this.setState({likedClass: 'fa fa-heart-o'});
    }
  }

  render(){
    var cover = {
      backgroundImage: `url(${this.props.imgUrl})`,
      height: "200px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    };

    const cardLink = `/city/amsterdam/store/${this.props._id}`

    return(
      <div className="card">
        <div className="card-content">
          <a href={cardLink}>
            <div className="card-top">
              <div className="card-img-wrapper" style={cover}></div>
              <h2>{this.props.name}</h2>
              <p>{this.props.address}</p>
              <p className="desc">{this.props.description}</p>
            </div>
          </a>
          <div className="card-social">
            <div className="card-social-inner">
              <div className="likes">
                <i className={this.state.likedClass} aria-hidden="true" onClick={this.toggleLike}></i> {this.state.likesCount}
              </div>
              <div className="comments">
                <i className="fa fa-comment-o" aria-hidden="true"></i> 0
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StoreCard;
