import React, { Component } from "react";
import DeliveryHeader from "./deliveryHeader";
import LocationList from "./locationList";
import SearchArea from "./searchArea";

export class Delivery extends Component {
  render() {
    return (
      <div className="delivery_main">
        <DeliveryHeader />
        <div className="delivery_root pt-2">
          <div className="container-fluid">
            <SearchArea />
            <LocationList />
          </div>
        </div>
      </div>
    );
  }
}

export default Delivery;
