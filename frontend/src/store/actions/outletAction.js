import axios from 'axios';
import { outLetURL } from "../../constants";
import * as Types from '../actions/types';


// List of outlets action
export const outletListActon = () => dispatch =>{
    axios.get(outLetURL)
        .then((res) => {
            // console.log(res.data);
            dispatch({
                type: Types.FETCH_OUTLET,
                payload: {
                    outlets : res.data
                }
            })
        })
        .catch((err) =>{
            console.log(err);
            dispatch({
                type: Types.FAIL
            })
        })
}


// Create outlets action
export const createOutletAction = outlets => dispatch => {
    axios.post(outLetURL, outlets)
        .then((res) => {
            // console.log(res.data);
            dispatch({
                message: "Outlet has been created successfully",
                type: Types.CREATE_OUTLET,
                payload: {
                    outlets: res.data
                }
            })
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: Types.FAIL
            })
        })
}
