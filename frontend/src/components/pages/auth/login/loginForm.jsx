import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { login } from '../../../../store/actions/authAction';

class LoginForm extends Component {

    state = {
        error: {}
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (
          JSON.stringify(nextProps.login_auth.error) !== JSON.stringify(prevState.error)
        ){
          return {
            error: nextProps.login_auth.error,
          };
        }
        return null;
      }

    render() {
        const { error } = this.state;
        const location = window.location.host.split('.')
        return (
            <form className="loginForm" onSubmit={this.props.submitHandler}>
                <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                        type="email"
                        className={
                            error && error.email
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                        name="email"
                        id="email"
                        onChange={this.props.changeHandler}
                        value={this.props.email}
                        placeholder="Enter Email"
                    />
                    {error && error.email && <div className="invalid-feedback">{error.email}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password *</label>
                    <Link
                        to="/password-reset"
                        className="forgot-password"
                    ></Link>

                    <Link to="/password-reset" className="forgot-password">
                        forgot password?
                    </Link>
                    <input
                        type="password"
                        className={
                            error && error.password
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                        name="password"
                        id="password"
                        onChange={this.props.changeHandler}
                        value={this.props.password}
                        placeholder="*****************"
                    />
                    {error && error.password && <div className="invalid-feedback">{error.password}</div>}
                </div>
                <button
                    type="submit"
                    className="btn btn-primary btn-block btn-sm login_btn"
                >
                    Login
                </button>
                <p className="mt-2">
                    <span className="mr-2">Don’t have an account?</span>
                    {location.length>1 ? (
                        <Link to="/user-registration">SignUp Now</Link>
                    ) : (
                        <Link to="/registration">SignUp Now</Link>
                    )}
                </p>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    login_auth: state.login_auth
})

export default connect(mapStateToProps, {login}) (LoginForm)
