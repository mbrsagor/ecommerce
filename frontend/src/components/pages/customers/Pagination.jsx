import React, { Component } from "react"

class Pagination extends Component {
    render() {
        return (
            <div className="customer-pagination mt-2">
                <nav aria-label="Page navigation ">
                    <ul className="pagination">
                        <li className="page-item">
                            <a
                                className="page-link"
                                href="/previous"
                                aria-label="Previous"
                            >
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>

                        <li className="page-item active">
                            <span className="page-link">
                                1<span className="sr-only">(current)</span>
                            </span>
                        </li>

                        <li className="page-item">
                            <a
                                className="page-link"
                                href="/next"
                                aria-label="Next"
                            >
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Pagination
