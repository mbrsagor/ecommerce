import React, { Component } from "react"
import Header from "../../bases/Header"

import Sidebar from "../../bases/Sidebar"

import OutletCreate from './OutletCreate'

class CreateOutlet extends Component {
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
                           <OutletCreate />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateOutlet
