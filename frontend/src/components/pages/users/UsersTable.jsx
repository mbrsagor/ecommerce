import FeatherIcon from "feather-icons-react";
import React, { Component } from "react";
import axios from "axios";
import {restaurantUserListURL} from "../../../constants";

class UsersTable extends Component {

    state = {
        data: [],
        error: null,
        loading: false
    }

    componentDidMount() {
        this.handleFetchUsers();
    }

    handleFetchUsers = () => {
        const {subdomain} = this.props;
        this.setState({loading: true});
        axios.get(restaurantUserListURL(subdomain)).then(res => {
          this.setState({ data: res.data, loading: false });
        }).catch(err => {
          this.setState({ error: err, loading: false });
        });
    }

    render() {
        const {data} = this.state;
        return (
            <div className='mt-5 userTable'>
                <h4>Accounts <span>{data.length} item</span> </h4>
                <div className="card table-responsive mt-4">
                    <table className="table table-hover mb-0">
                        <thead className="table-header">
                            <tr>
                                <th scope="col">
                                <span><FeatherIcon icon="chevron-up" size="17" /></span> Users
                                </th>
                                <th scope="col">Role</th>

                                <th scope="col">Access</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data && data.map((user, i) => {
                            return (
                                <tr>
                                    <td>
                                        <a href="#0">{user.name}</a>
                                        <p>{user.email}</p>
                                    </td>
                                    <td>{user.is_owner ? "Account owner" : "Active user"}</td>
                                    <td>{user.is_owner ? "All access" : "Limited"}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
        </div>
        )
    }
}

export default UsersTable
