import React, { Component } from "react"

class DayTable extends Component {
    render() {
        return (
            <>
                <tr>
                    <th scope="row">{this.props.day}</th>

                    <td>
                        <label className="switch">
                            <input type="checkbox" id="togBtn" />
                            <div className="slider round"></div>
                        </label>
                    </td>
                    <td>
                        <input type="time" id="appt" name="appt" />
                    </td>
                    <td>
                        <input type="time" id="appt" name="appt" />
                    </td>
                </tr>
            </>
        )
    }
}

export default DayTable
