import React, { Component } from "react"
import Header from "../../../bases/Header"
import Sidebar from "../../../bases/Sidebar"
import Pagination from "../../customers/Pagination"
import MenuHeader from '../MenuHeader'
import ModifierTable from "./ModifierTable"
import SearchBar from "./Searchbar"



class ModifiersList extends Component {
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
                           
                            <MenuHeader itemLink="/create-modifier" title='Modifier Lists' submenu_name='Modifier Lists' create_link='/menu_create_2' />
                            <br />
                            <SearchBar />
                            <br />
                            <ModifierTable />
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ModifiersList
