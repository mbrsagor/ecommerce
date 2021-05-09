import React, { Component } from "react"
import Header from "../../../../bases/Header"
import Sidebar from "../../../../bases/Sidebar"
import AddCategory from './AddCategory'
import CategoriesList from './CategoriesList'
import MenuDetails from './MenuDetails'
import MenuHeader from './MenuHeader'



class ViewMenu extends Component {
    render() {
        const {match: {params}} = this.props;
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
                        <div className="container">
                           <MenuHeader />
                            <div className="card mt-3 p-3">
                                <MenuDetails id={params.id} />
                            </div>
                            <div className='card p-3'>
                            <CategoriesList />
                            <AddCategory />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewMenu
