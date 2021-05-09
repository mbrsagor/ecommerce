import React, { Component } from "react"
import Header from "../../../bases/Header"
import Sidebar from "../../../bases/Sidebar"
import MenuHeader from "../MenuHeader"
import ItemTable from "./ItemTable"
import SearchBar from "./SearchBar"

class ItemsAndModifiers extends Component {
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
                                itemLink="/create-item-modifier"
                                title="Items & Modifiers"
                                submenu_name="Items"
                                create_link="/menu_create_1"
                            />
                            <br />
                            <SearchBar />
                            <br />
                            <ItemTable />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ItemsAndModifiers
