import React, { Component } from "react"
import Header from "../../bases/Header"
import PreviewStore from "../../bases/PreviewStore"
import Sidebar from "../../bases/Sidebar"
import OutletLists from "./OutletLists"
// import OutletSearch from "./OutletSearch"


class Outlets extends Component {

    componentDidMount() {
        document.title = "General information - Outlets | onnow";
    }

    render() {
        return (
            <div id="wrapper">
                <div className="navbar-nav">
                    <Sidebar />
                </div>
                <div className="d-flex flex-column content_area">
                    <header>
                        <Header preview_store={<PreviewStore />} />
                    </header>
                    <div className="main_content">
                        <div className="container-fluid border_top">
                            {/* <OutletSearch /> */}
                            <OutletLists />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Outlets
