import React, { Component } from "react";

function refactorOrder(order) {
  return {
    id: order.id,
    username: order.user.first_name,
    outlet: order.outlet.name,
    items: order.items?.length,
    phone_number: order.user.phone_number,
    orderStatus: order.order_status,
  };
}

const OrderPlaced = ({ orders, status, tabNo, handleOrderStatusChange }) => {
  // console.log(orders);

  return (
    <div className="orderTabContent table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID Tab {tabNo}</th>
            <th>Username</th>
            <th>Outlet</th>
            <th>Items</th>
            <th>Phone Number</th>
            {status === 'ORDER_PLACED' ? (
                <th>Status</th>
            ) : <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 &&
            orders.map((item) => {
              item = refactorOrder(item);
              return (
                <tr key={item.id}>
                  <td>#{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.outlet}</td>
                  <td>{item.items}</td>
                  <td>{item.phone_number}</td>
                  {status === 'ORDER_PLACED' ? (
                      item.orderStatus === 'ORDER_PLACED' ? (
                          <td>
                            <button
                              className="btn btn-primary btn-sm"
                              onClick={() =>
                                handleOrderStatusChange(item.orderStatus, item.id)
                              }
                            >
                              Next
                            </button>
                          </td>
                      ) : (
                          <td>{item.orderStatus}</td>
                      )
                  ) : (
                      <td>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() =>
                            handleOrderStatusChange(item.orderStatus, item.id)
                          }
                        >
                          Next
                        </button>
                      </td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default OrderPlaced;
