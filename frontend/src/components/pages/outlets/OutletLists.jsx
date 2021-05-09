import FeatherIcon from "feather-icons-react";
import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { outletListActon } from '../../../store/actions/outletAction';
import Pagination from '../customers/Pagination';
import OutletSearch from "./OutletSearch";

class OutletLists extends Component {

    state = {
        searchValue: ''
    }

    componentDidMount() {
        this.props.outletListActon();
    }

    render() {
        const {outlets} = this.props;
        let searchOutlet = outlets.length>0 && outlets.filter((outlet) => {
            return outlet.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
        })
        // console.log(outlets);
        return (
            <div className="mt-5 outletListTable">

                <OutletSearch
                    searchValue={this.searchValue}
                    searchHandler={(e) => this.setState({searchValue: e.target.value})} />

                <table className="table outletTalbe">
                    <thead>
                        <tr>
                            <th>
                                <a href="#0">Outlet name</a>
                            </th>
                            <th>
                                <a href="#0">Status <span className="mt-2"><FeatherIcon icon="help-circle" size="13" /></span></a>
                            </th>

                            <th>
                                <a href="#0">Delivery</a>
                            </th>
                            <th>
                                <a href="#0">Pickup At</a>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchOutlet && searchOutlet.map((outlet, index) =>{
                            return(
                                <tr key={index} className="mb-5">
                                    <th className="first-column">
                                    <img src={outlet.avatar ? outlet.avatar: 'logo.svg'} className="table-image" alt="logo" />
                                        <div>
                                            <h6>{outlet.name}</h6>
                                            <p>{outlet.address}</p>
                                        </div>
                                    </th>
                                    <td>
                                        <div>
                                            {outlet.is_publish ? 'Active': 'Draft'}
                                            <p>4 out of 5 steps completed</p>
                                        </div>
                                    </td>
                                    <td>{outlet.order_delivery.is_open ? "Enabled" : "Disabled"}</td>
                                    <td>{outlet.order_pickup.is_open ? "Enabled" : <span className="Disabled">Disabled <span className="ml-3">
                                        <Link to="/create-outlet">
                                        <FeatherIcon icon="edit-2" size="15" />
                                        </Link>
                                        </span></span>}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="row">
                    <div className="col-md-6">
                        <p>Showing 10 of 10 records.</p>
                    </div>
                    <div className="col-md-6 text-right">
                        <Pagination />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    outlets: state.outlets
})

export default connect(mapStateToProps, {outletListActon}) (OutletLists)
