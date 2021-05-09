import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const columns = [
  {
    dataField: "id",
    text: "Product ID",
    sort: true,
  },
  {
    dataField: "slot",
    text: "Slot",
    sort: true,
  },
  {
    dataField: "totalOrders",
    text: "Total Orders",
    sort: true,
  },
  {
    dataField: "plannedOrders",
    text: "Planned Orders",
    sort: true,
  },
  {
    dataField: "invoicedOrders",
    text: "Invoiced Orders",
    sort: true,
  },
];

const products = [
  {
    id: 1533957720000,
    slot: "09:00 AM - 10:00 AM",
    totalOrders: 1,
    plannedOrders: 1,
    invoicedOrders: 0,
  },
  {
    id: 1534163220000,
    slot: "06:00 PM - 07:00 PM",
    totalOrders: 6,
    plannedOrders: 6,
    invoicedOrders: 0,
  },
  {
    id: 1534166820000,
    slot: "07:00 PM - 08:00 PM",
    totalOrders: 5,
    plannedOrders: 5,
    invoicedOrders: 0,
  },
  {
    id: 1534177320000,
    slot: "10:00 PM - 11:00 PM",
    totalOrders: 1,
    plannedOrders: 1,
    invoicedOrders: 0,
  },
  {
    id: 1534213320000,
    slot: "08:00 AM - 09:00 AM",
    totalOrders: 2,
    plannedOrders: 2,
    invoicedOrders: 0,
  },
  {
    id: 1534238520000,
    slot: "03:00 PM - 04:00 PM",
    totalOrders: 1,
    plannedOrders: 1,
    invoicedOrders: 0,
  },
  {
    id: 1534245720000,
    slot: "05:00 PM - 06:00 PM",
    totalOrders: 3,
    plannedOrders: 3,
    invoicedOrders: 0,
  },
  {
    id: 1534249320000,
    slot: "06:00 PM - 07:00 PM",
    totalOrders: 1,
    plannedOrders: 1,
    invoicedOrders: 0,
  },
  {
    id: 1534252920000,
    slot: "07:00 PM - 08:00 PM",
    totalOrders: 4,
    plannedOrders: 4,
    invoicedOrders: 0,
  },
  {
    id: 1534260120000,
    slot: "09:00 PM - 10:00 PM",
    totalOrders: 1,
    plannedOrders: 1,
    invoicedOrders: 0,
  },
];

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    Showing {from} to {to} of {size} Results
  </span>
);

const options = {
  firstPageText: "First",
  prePageText: "Back",
  nextPageText: "Next",
  lastPageText: "Last",
  nextPageTitle: "First page",
  prePageTitle: "Pre page",
  firstPageTitle: "Next page",
  lastPageTitle: "Last page",
  showTotal: true,
  paginationTotalRenderer: customTotal,
  disablePageTitle: true,
  // sizePerPage: 2,
  sizePerPageList: [
    {
      text: "5",
      value: 5,
    },
    {
      text: "10",
      value: 10,
    },
    {
      text: "All",
      value: products.length,
    },
  ],
};

function ReactTable() {
  return (
    <>
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={products}
        columns={columns}
        pagination={paginationFactory(options)}
      />
    </>
  );
}

export default ReactTable;
