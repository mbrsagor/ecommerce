import React, { Component } from 'react'

class DiscountFrom extends Component {
    render() {
        return (
            <div className="dicount_from discount-box">
                <h2 className="mb-3">Create a discount</h2>
                <form>
                    <div className="from-group">
                        <label htmlFor="discount_name">Discount Name *</label>
                        <input 
                            type="text"
                            placeholder="E.g. Taco Thusday!" 
                            className="form-control"
                        />
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-10">
                            <div className="from-group">
                                <label htmlFor="discount_name">Discount Name *</label>
                                <input 
                                    type="text"
                                    placeholder="E.g. Taco Thusday!" 
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-md-2 pl-lg-0">
                            <button className="btn btn-primary btn-discount">Generate</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default DiscountFrom
