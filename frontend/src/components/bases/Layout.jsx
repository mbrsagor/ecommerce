import React, { Component } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"

class Layout extends Component {
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
                        <h3>Welcome to onnow</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout
