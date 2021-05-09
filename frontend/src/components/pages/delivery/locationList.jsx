import FeatherIcon from "feather-icons-react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { locationListURL } from "../../../constants";
import axios from "axios";

class LocationList extends Component {
  state = {
    data: null,
    error: null,
    loading: false,
  };

  componentDidMount() {
    this.loadLocationList();
  }

  loadLocationList() {
    this.setState({ loading: true });
    axios
      .get(locationListURL)
      .then((res) => {
        this.setState({ data: res.data, loading: false });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="mt-2 item_list">
        <ul className="list-group">
          {data &&
            data.map((location, i) => {
              return (
                <div key={location.id}>
                  <li className="parent_item">
                    {location.name} <span>{location.child.length}</span>
                  </li>
                  {location.child.map((location_child, j) => {
                    return (
                      <li key={location_child.id}>
                        <Link to={`/delivery-itemlist/${location_child.id}`}>
                          {location_child.name}
                          <span>
                            <FeatherIcon icon="chevron-right" size="15" />
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </div>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default LocationList;
