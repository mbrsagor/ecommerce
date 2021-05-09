import React, { Component } from "react"
import Header from "../../bases/Header"
import PageTitle from "../../bases/PageTitle"
import Sidebar from "../../bases/Sidebar"
import ResultsTable from "./ResultsTable"
import SearchBar from "./SearchBar"

class OrderHistory extends Component {

    componentDidMount(){
        document.title = "Order History | onnow";
    }

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
                            <PageTitle page_title="Order History" />
                            <SearchBar />
                            <br />
                            <ResultsTable />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderHistory
