import React, { Component } from "react"
import { Link } from "react-router-dom"

import CollapseItem from './CollapseItem'

class CategoriesList extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-7">
                    <div className="row justify-content-between">
                        <div className="col-md-3">
                            <h6>Categories</h6>
                        </div>
                        <div className="col-md-3">
                            <Link to="/">New Category</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <CollapseItem />  
                        </div>
                    </div>
                </div>
                <div className="col-md-5 bg-secondary">
                    <p>Restaurant info</p>
                </div>
            </div>
        )
    }
}

export default CategoriesList
