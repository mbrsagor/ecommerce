import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { passwordChangeURL } from "../../../constants";
import { passwordUpdateAction } from '../../../store/actions/passwordChangeAction';


export class ChangePassword extends Component {

    state = {
        old_password: '',
        password: '',
        password2: ''
    }

    onChagneHandler =  e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault();
        let {old_password, password, password2} = this.state;
        this.props.passwordUpdateAction(this.props.params.id, {old_password, password, password2})
        // console.log("Password has been changed");
    }


    render() {
        let {old_password, password, password2} = this.state;
        return (
            <>
             <form onSubmit={this.submitHandler} className="mt-5">
                    <h4>Security</h4>
                    <label htmlFor="old_password">
                        Current password *
                    </label>
                    <input
                        type="password"
                        id="Current_password"
                        className="form-control"
                        name="old_password"
                        value={old_password}
                        required/>
                    <label htmlFor="password">New password *</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        value={password}
                        required/>
                    <label htmlFor="password2">
                        New password *
                    </label>
                    <input
                        type="password"
                        id="password2"
                        className="form-control"
                        name="password2"
                        value={password2}
                        required/>

                    <button type="submit" className="btn btn-md mt-3 btn-secondary">
                        Update password
                    </button>
                </form>   
            </>
        )
    }
}

export default connect(null, {passwordUpdateAction}) (ChangePassword)
