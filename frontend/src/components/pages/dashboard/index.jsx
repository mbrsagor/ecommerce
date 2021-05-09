import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../bases/Header";
import PageTitle from "../../bases/PageTitle";
import PreviewStore from "../../bases/PreviewStore";
import Sidebar from "../../bases/Sidebar";
import Charts from "./charts";
import CustomarTable from "./CustomarTable";
import Filter from "./Filter";
import Starter from "./Starter";
import Status from "./Status";



class Dashboard extends Component {

    state = {
        data: null,
        error: null,
        loading: false
    };

    render() {
        return (
            <div id="wrapper">
                <div className="navbar-nav">
                    <Sidebar />
                </div>
                <div className="d-flex flex-column content_area">
                    <Header preview_store={<PreviewStore />} />
                    <div className="main_content">
                        <div className="container-fluid border_top">
                            <Starter />
                            <PageTitle page_title="Dashboard" />

                            <Filter />
                            <Status />
                            <CustomarTable />
                            <Charts />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null,
    subdomain: state.auth.subdomain,
    is_owner: state.auth.is_owner
  };
};

export default connect(mapStateToProps)(Dashboard);
