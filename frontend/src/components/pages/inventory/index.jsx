import React, { Component } from "react"
import Header from "../../bases/Header"
import PageTitle from "../../bases/PageTitle"
import Sidebar from "../../bases/Sidebar"
// import Filter from "./Filter"
import InventoryList from "./InventoryList"

class Inventory extends Component {

    componentDidMount(){
        document.title="Inventory | onnow"
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
                            <PageTitle page_title="Inventory" />
                            {/* <Filter /> */}
                            <InventoryList />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inventory
