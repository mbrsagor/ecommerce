import FeatherIcon from "feather-icons-react";
import React, { Component } from "react";

class SearchArea extends Component {
  render() {
    return (
      <div className="search_area">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="search fon and area"
          />
          <button type="submit">
            <FeatherIcon icon="search" size="15" />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchArea;
