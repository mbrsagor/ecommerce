import React, { Component } from "react"
import { Link } from "react-router-dom"

class MenuHeader extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-5 mt-4">
                    <h5 className='page-title'>{this.props.title}</h5>
                </div>

                <div className="col-lg-7 mt-4 menuHeaderButton">
                    <div className="wrap text-lg-right">
                        <a
                            href="#0"
                            className="btn-rounded-light mr-3"
                            target="_blank"
                        >
                            Learn more about
                            <span className="text-primary"> {this.props.submenu_name}</span>
                        </a>
                        <button  type="button" className="btn btn-default btn-md mr-2" > Import </button>
                        <Link to={this.props.itemLink}>
                            <button type="button" className="btn btn-primary btn-md"> Create</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuHeader
