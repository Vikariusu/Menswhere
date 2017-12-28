import React from 'react';
import "./css/searchbar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      results: []
    }
  }

  render() {
    return (
      <div>
        <input></input>
        <button><i className="fa fa-search" aria-hidden="true"></i></button>
      </div>
    )
  }
}

export default SearchBar;
