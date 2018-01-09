import React from 'react';
import "./css/searchbar.css";

class SearchBar extends React.Component {
  handleInputChange = (e) => {
    e.preventDefault();
    console.log(e);
    this.props.changeSearchTerm(e.target.value);
    console.log(`this is your state rn ${this.props.searchTerm}`);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleInputChange}>
          <input type="search" name="search" className="search-input" aria-label="Search" />
          <button className="btn-search"><i className="fa fa-search" aria-hidden="true"></i></button>
        </form>
      </div>
    )
  }
}

export default SearchBar;
