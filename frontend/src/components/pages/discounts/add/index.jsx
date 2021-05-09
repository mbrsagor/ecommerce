// import FeatherIcon from "feather-icons-react"
import React, { Component } from 'react'
import Header from "../../../bases/Header"
import Sidebar from "../../../bases/Sidebar"
import Application from './Application'
import DiscountFrom from './DiscountFrom'
import OrderType from './OrderType'
import ApplicableOutlets from './ApplicableOutlets'
import FeatherIcon from "feather-icons-react"

class CreateDiscount extends Component {

    componentDidMount() {
        document.title = "Create Discount | onnow"
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
                            <div className="row">
                                <div className="col-lg-7">
                                    <DiscountFrom />
                                    <Application />
                                    <OrderType />
                                    <ApplicableOutlets />
                                </div>
                                <div className="col-lg-5">
                                    <div className="discount-box bg-gray">
                                        <h4>Preview</h4>
                                        <div className="preview-box">
                                            <div className="preview-icon">
                                                <FeatherIcon icon="tag" size="18" />
                                            </div>
                                            <div className="preview-content">
                                                <h5> Taco Tuesday! </h5>
                                                <p>Get 0% off all orders</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateDiscount
