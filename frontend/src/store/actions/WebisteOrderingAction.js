import axios from "axios";
import { updateSubdomainURL, restaurantCreateURL } from "../../constants";
import * as Types from "../actions/types";

// Details Website Orderng
export const WebsiteOrderngDetailsAction = (id) => (dispatch) => {
  axios
    .get(`${restaurantCreateURL}${id}/`)
    .then((res) => {
      // console.log(res.data);
      dispatch({
        type: Types.RETRIVE_WEBSITEORDRING,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: Types.FAIL,
      });
    });
};

// Update Website Orderng
export const WebsiteOrderngUpdateAction = (id, website) => (dispatch) => {
  axios
    .put(updateSubdomainURL(id), website)
    .then((res) => {
      dispatch({
        type: Types.UPDATE_WEBSITEORDRING,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: Types.FAIL,
      });
    });
};
