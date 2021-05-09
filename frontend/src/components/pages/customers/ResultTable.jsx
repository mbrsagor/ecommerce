import React, { Component } from "react"
import Pagination from "./Pagination"
import axios from "axios";
import {restaurantUserListURL} from "../../../constants";

class ResultTable extends Component {

    state = {
        data: [],
        loading: false,
        error: null
    }

    componentDidMount() {
        this.handleFetchUsers();
    }

    handleFetchUsers = () => {
        const {subdomain} = this.props;
        this.setState({loading: true});
        axios.get(restaurantUserListURL(subdomain)).then(res => {
          console.log(res.data);
          this.setState({ data: res.data, loading: false });
        }).catch(err => {
          this.setState({ error: err, loading: false });
        });
    }

    render() {
        const {data} = this.state;
        return (
            <div className="card table-responsive">
                <table className="table table-hover">
                    <thead className="table-header">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Phone number</th>
                            <th scope="col">Orders Placed</th>
                            <th scope="col">First Ordered At</th>
                            <th scope="col">Last Ordered At</th>
                            <th className="text-right" scope="col">Total Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data && data.map((customer, i) => {
                        return (
                            <tr key={customer.id}>
                                <td>{customer.name}</td>
                                <td><a href="tel:+8801820736647">+88{customer.phone_number}</a></td>
                                <td>{customer.total_order}</td>
                                <td>Mar 01, 2021</td>
                                <td>Mar 01, 2021</td>
                                <td className="text-right">MYR {customer.total_revenue}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <div className="row ml-0 mr-0 pt-3 pb-3 customPaginationComponent">
                    <div className="col-md-6 pl-2">
                        <p className="mb-0 ml-2 showing_text">Showing from 1 to 1 of 1 record.</p>
                    </div>
                    <div className="col-md-6 text-right pr-3">
                        <Pagination />
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultTable
