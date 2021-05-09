import React, { Component } from 'react'

class SpecialInstructions extends Component {
    render() {
        return (
            <div className="special_instructions">
                <h2>Special Instructions</h2>
                <form>
                    <textarea className="form-control" placeholder="Add a note or any instructions"/>
                </form>
            </div>
        )
    }
}

export default SpecialInstructions
