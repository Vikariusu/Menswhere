import React from 'react';
import './css/filterOptions.css';

class FilterOptions extends React.Component {
  filterOptions = (event) => {
    const query = event.target.innerHTML.toLowerCase();
    console.log(query);
    this.props.changeFilterOption(query);
  }

  render() {
    return (
      <div className="filter-options">
        <div className="filter-option">
          <h6>Price range</h6>
          <div className="filter-price-option">
            <i className="fa fa-eur" aria-hidden="true"></i>
            <i className="fa fa-eur gray" aria-hidden="true"></i>
            <i className="fa fa-eur gray" aria-hidden="true"></i>
          </div>
          <div className="filter-price-option">
            <i className="fa fa-eur" aria-hidden="true"></i>
            <i className="fa fa-eur" aria-hidden="true"></i>
            <i className="fa fa-eur gray" aria-hidden="true"></i>
          </div>
          <div className="filter-price-option">
            <i className="fa fa-eur" aria-hidden="true"></i>
            <i className="fa fa-eur" aria-hidden="true"></i>
            <i className="fa fa-eur" aria-hidden="true"></i>
          </div>
        </div>
        <div className="filter-option">
          {/* <button onClick={this.filterOptions}>Filter style</button> */}
          <h6>Style</h6>
          <div className="filter-style-option" onClick={this.filterOptions}>Casual</div>
          <div className="filter-style-option" onClick={this.filterOptions}>Workwear</div>
          <div className="filter-style-option" onClick={this.filterOptions}>Vintage</div>
          <div className="filter-style-option" onClick={this.filterOptions}>Formal</div>
          <div className="filter-style-option" onClick={this.filterOptions}>Streetwear</div>
        </div>
      </div>
    )
  }
}

export default FilterOptions;
