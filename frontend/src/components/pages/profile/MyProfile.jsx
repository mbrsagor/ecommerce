import axios from "axios";
import FeatherIcon from "feather-icons-react";
import React, { Component } from "react";
import { accountDetailURL, accountUpdateURL } from "../../../constants";
import ChangePassword from './ChangePassword';

class MyProfile extends Component {

    state = {
        data: {
            first_name: '',
            last_name: ''
        },
        error: null,
        loading: false
    }

    componentDidMount() {
        this.loadUserProfile();
    }

    loadUserProfile = () => {
        const {user_id} = this.props;
        this.setState({loading: true});
        axios.get(accountDetailURL(user_id)).then(res => {
          this.setState({ data: res.data, loading: false });
        }).catch(err => {
          this.setState({ error: err, loading: false });
        });
    }

    userChange = (e) => {
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });
    }

    changeUserSubmitHandler = (e) => {
        e.preventDefault();
        const {first_name, last_name} = this.state.data;
        const {user_id} = this.props;
        this.setState({loading: true});
        axios.put(accountUpdateURL(user_id), {first_name, last_name}).then(res => {
          console.log(res.data);
          this.setState({ loading: false });
        }).catch(err => {
          this.setState({ error: err, loading: false });
        });
    }

    render() {
        const {data} = this.state;
        return (
            <div>
                <h1>My Profile</h1>
                <p>
                    Manage your personal information and security of your onnow
                    account
                </p>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <h4>Personal iformation</h4>
                        <form onSubmit={this.changeUserSubmitHandler}>
                            <label htmlFor="first_name">First Name *</label>
                            <input
                                type="text"
                                id="first_name"
                                className="form-control"
                                name="first_name"
                                defaultValue={data.first_name}
                                onChange={this.userChange}
                                required
                            />
                            <label htmlFor="last_name">Last Name *</label>
                            <input
                                type="text"
                                id="last_name"
                                className="form-control"
                                name="last_name"
                                defaultValue={data.last_name}
                                onChange={this.userChange}
                                required
                            />
                            <button type="submit" className="btn btn-md mt-3 btn-secondary">
                                Update personal info
                            </button>
                        </form>
                        <div className="mt-5">
                            <h4>Email</h4>
                            <p>
                                Your current email address is
                                <b> zishanismam@gmail.com</b>
                            </p>
                        </div>
                        
                        <ChangePassword />

                        <div className="mt-5">
                            <h4>Live orders alert</h4>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h4>Role</h4>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card p-3">
                                <h4>Account owner</h4>
                                <li>
                                    <span className="mr-4 mt-3 ">
                                        <FeatherIcon icon="log-out" size="15" />
                                    </span>
                                    <h5>Tihami's kitchen</h5>
                                    <p>Dhanmondi, Bangladesh</p>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyProfile
