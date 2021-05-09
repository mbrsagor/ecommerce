import React, { Component } from "react"
import Header from "../../bases/Header"
import Sidebar from "../../bases/Sidebar"
import MyProfile from "./MyProfile"
import {connect} from "react-redux";

class Profile extends Component {

    render() {
        const {user_id} = this.props.user;
        return (
            <div id="wrapper">
                <div className="navbar-nav">
                    <Sidebar />
                </div>
                <div className="d-flex flex-column content_area">
                    <header>
                        <Header />
                    </header>
                    <div className="main_content">
                        <div className="container-fluid">
                            <MyProfile user_id={user_id} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    user: state.login_auth.user
  };
};

export default connect(mapStateToProps)(Profile);
