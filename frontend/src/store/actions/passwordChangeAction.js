import axios from 'axios';
import { passwordChangeURL } from "../../constants";
import * as Types from '../actions/types';


// Password Update Action 
export const passwordUpdateAction = (id, user) => dispatch => {
    axios.put(`${passwordChangeURL}${id}/`, user)
        .then((res) => {
            dispatch({
                type: Types.PASSWORD_UPDATE,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: Types.FAIL
            })
        })
}
