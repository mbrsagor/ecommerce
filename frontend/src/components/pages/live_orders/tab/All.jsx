import React, { Component } from "react";
import { connect } from "react-redux";
import { getLiveOrderAll } from "../../../../store/actions/restaurantOrderAction";

export class All extends Component {
  componentDidMount() {
    this.props.getLiveOrderAll();
  }

  render() {
    const { live_all_orders } = this.props;
    // console.log(live_all_orders);
    return (
      <div className="orderTabContent table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Outlet</th>
              <th>Items</th>
              <th>Phone Number</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {live_all_orders.length > 0 &&
              live_all_orders.map((order) => {
                return (
                  <tr key={order.id}>
                    <td>#{order.id}</td>
                    <td>{order.user.username}</td>
                    <td>{order.outlet}</td>
                    <td>{order.items}</td>
                    <td>0{order.user.phone_number}</td>
                    <td></td>
                    <td>
                      <button className="btn btn-primary btn-sm">
                        Order Confirm
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  live_all_orders: state.live_all_orders,
});

export default connect(mapStateToProps, { getLiveOrderAll })(All);
