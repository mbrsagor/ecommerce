import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";

class SearchOrder extends Component {
  render() {
    return (
      <div className="input-group orderSearchInput">
        <input
          id="search-focus"
          type="search by order ID"
          className="form-control"
          placeholder="Search"
        />
        <button className="btn btn-default">
          <FeatherIcon icon="search" size="15" />
        </button>
      </div>
    );
  }
}

export default SearchOrder;
