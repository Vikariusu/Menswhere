import React from 'react';
import './css/filterOptions.css';

class FilterOptions extends React.Component {
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
          <h6>Style</h6>
          <div>Casual</div>
          <div>Workwear</div>
          <div>Vintage</div>
          <div>Formal</div>
          <div>Streetwear</div>
        </div>
      </div>
    )
  }
}

export default FilterOptions;
