import FeatherIcon from "feather-icons-react"
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from "../../bases/Header"
import PageTitle from "../../bases/PageTitle"
import Sidebar from "../../bases/Sidebar"


class Discounts extends Component {

    componentDidMount() {
        document.title = "Discount | Onnow"
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
                            <PageTitle page_title="Discounts" />
                            <div className="discount_intro text-center mt-5 pt-5">
                                <FeatherIcon icon="cpu" size="100" />
                                <h4>Let's create your first discount!</h4>
                                <p>Create discounts to attract new customers, promote new products for your existing customers, and increase your sales. <a className="learn_more" href="/"><u>Learn more</u></a> </p>
                                <Link to="/create-discount" className="btn btn-primary btn-discount">Create Discount</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Discounts
