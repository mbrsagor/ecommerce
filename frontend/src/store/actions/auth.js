import axios from 'axios';

import {addRestaurantURL, addRestaurantUser, restaurantCreateURL, signupURL} from "../../constants";
import * as actionTypes from './actionTypes';
import setAuthToken from "../../utils/setAuthToken";
import * as Types from '../actions/types';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, subdomain, is_owner) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        subdomain: subdomain,
        is_owner: is_owner
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
      localStorage.removeItem('user');
      localStorage.removeItem('expirationDate');
      return {
          type: actionTypes.AUTH_LOGOUT
      };
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authSignup = (account, restaurant, history) => {
    return dispatch => {
        axios.post(signupURL, {...account})
            .then(res => {
                const token = res.data.tokens.access;
                localStorage.setItem('token', token)
                setAuthToken(token)
                console.log(res.data);
                dispatch({
                    type: Types.SET_USER,
                    payload: {
                        user: res.data
                    }
                })

                const contentType = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

                if (typeof restaurant === "string") {
                    axios.get(addRestaurantUser(restaurant), contentType)
                        .then(res => {
                            console.log(res.data);
                        })
                    history.push('/otp-add')
                } else {
                    axios.post(restaurantCreateURL, restaurant, contentType)
                        .then(res => {
                            console.log(res.data)
                            const restaurant = res.data.id;
                            axios.post(addRestaurantURL, {restaurant}, contentType)
                                .then(res => {
                                    console.log(res.data)
                                })
                            history.push('/otp-add')
                            // window.location.href = '//' + subdomain + '.localhost:3000/auth';
                        })
                }
                dispatch(logout())
            })
            .catch(err => {
                dispatch(authFail(err))
            })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= new Date() ) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(( expirationDate.getTime() - new Date().getTime()) / 1000) );
            }
        }
    }
}
