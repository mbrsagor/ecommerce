import React, { Component } from "react"
import { connect } from "react-redux";
import Header from "../../bases/Header"
import PageTitle from "../../bases/PageTitle"
import Sidebar from "../../bases/Sidebar"
import ResultTable from "./ResultTable"
import SearchTable from "./SearchTable"

class Customers extends Component {
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
                        <div className="container-fluid border_top">
                        <PageTitle page_title="Customers" />
                            <SearchTable />
                            <br />
                            <ResultTable
                                subdomain={this.props.subdomain}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    subdomain: state.login_auth.user.sub_domain
  };
};

export default connect(mapStateToProps)(Customers);