import React, { Component } from 'react'

class FooterTop extends Component {
    render() {
        return (
            <div className="footerTop pt-5 pb-5">
                <div className="container pt-3 pb-3">
                    <div className="row pt-5 pb-5">
                        <div className="col-md-8">
                            <div className="footerTopText">
                                <h2>Start selling online for free</h2>
                                <p>We will help you make the most of your restaurant online.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <form action="">
                               <div className="form-wrap">
                                <input type="text" placeholder="Enter your email"/>
                                <button className="btn submit-btn">get started</button>
                               </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FooterTop
