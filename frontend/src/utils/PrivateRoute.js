import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';

const PrivateRoute =({component:Component, login_auth, ...rest}) => (
    <Route
        {...rest}
        render={props => {
            if(!login_auth.isAuthenticated){
                return <Redirect to='/login' />
            }else{
                return <Component {...props} />;
            }
        }}
    />
)

const mapStateToProps = state => ({
    login_auth: state.login_auth
})

export default connect(mapStateToProps) (PrivateRoute)
