import React, { Component } from "react"
import Header from "../../../bases/Header"
import Sidebar from "../../../bases/Sidebar"
import Pagination from "../../customers/Pagination"
import MenuHeader from "../MenuHeader"
import MenusTable from "./MenusTable"

class Menus extends Component {
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
                            <MenuHeader
                                title="Menus"
                                itemLink="/menu-create"
                                submenu_name="Menus"
                                create_link="/menu_create_3"
                            />
                            <br />
                            <MenusTable />
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Menus
