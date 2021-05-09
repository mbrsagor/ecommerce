import React, { Component } from 'react';
import Header from "../../bases/Header";
import Sidebar from "../../bases/Sidebar";
import PageTitle from "../../bases/PageTitle"

import HardwareTest from './HardwareTest'
import OrderList from './OrderList'


class PauseOrder extends Component {
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
                        <PageTitle page_title="Pause New Orders" />
                            <OrderList />
                            <HardwareTest />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PauseOrder
