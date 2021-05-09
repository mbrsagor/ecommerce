import React, { Component } from "react";
import Ready from "./tab//Ready";
import All from "./tab/All";
import Kitchen from "./tab/Kitchen";
import NewOrder from "./tab/New";
import FeatherIcon from "feather-icons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faMinus,
  faPlus,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import CustomModal from "./../modal/CustomModal";
import OrderPlaced from "./tab/OrderPlaced";
import OrderInfo from "./OrderInfo";

class Order extends Component {
  state = {
    orderLists: [
      {
        id: "3654654",
        username: "John Doe",
        outlet: "outlet 1",
        items: 5,
        phone_number: "946152 2131",
      },
      {
        id: "#987964654",
        username: "Sohanur Rahman",
        outlet: "outlet 2",
        items: 2,
        phone_number: "123 456 789",
      },
    ],
  };

  render() {
    return (
      <>
        <div className="tab-content">
          <div id="ORDER_PLACED" className="tab-pane active">
            <OrderPlaced lists={this.state.orderLists} tabNo="1" />
          </div>
          <div id="CUSTOMER_CONFIRMED" className="tab-pane fade">
            <OrderPlaced lists={this.state.orderLists} tabNo="2" />
          </div>
          <div id="RIDER_CONFIRMED" className="tab-pane fade">
            <OrderPlaced lists={this.state.orderLists} tabNo="3" />
          </div>
          <div id="PREPARING" className="tab-pane fade">
            <OrderPlaced lists={this.state.orderLists} tabNo="4" />
          </div>
          <div id="WAITING" className="tab-pane fade">
            <OrderPlaced lists={this.state.orderLists} tabNo="5" />
          </div>
          <div id="DISPATCHED" className="tab-pane fade">
            <OrderPlaced lists={this.state.orderLists} tabNo="6" />
          </div>
        </div>
      </>
    );
  }
}

export default Order;
