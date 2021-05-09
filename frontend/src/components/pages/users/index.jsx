import React, { Component } from "react";
import Header from "../../bases/Header";
import Sidebar from "../../bases/Sidebar";

import UsersHeader from "./UsersHeader";
import UsersTable from "./UsersTable";
import { connect } from "react-redux";
import ReactTable from "./ReactTable";

class Users extends Component {
  render() {
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
              <UsersHeader />
              <UsersTable subdomain={this.props.subdomain} />

              <h6 className="p-3 border mt-5 rounded font-weight-bold text-uppercase table-secondary">
                Demo Table
              </h6>
              <ReactTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    subdomain: state.login_auth.user.sub_domain,
  };
};

export default connect(mapStateToProps)(Users);
