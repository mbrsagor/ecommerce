import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginURL } from "../../constants";
import setAuthToken from "../../utils/setAuthToken";
import * as Types from "../actions/types";

// user login action
export const login = (user, history) => (dispatch) => {
  axios
    .post(loginURL, user)
    .then((res) => {
      // console.log(res.data);
      let token = res.data.access;
      console.log(token);
      localStorage.setItem("token", token);
      setAuthToken(token);
      let decode = jwtDecode(token);
      console.log(decode);
      const subdomain = decode.sub_domain;
      const is_verified = decode.is_verified;
      const is_owner = decode.is_owner;
      dispatch({
        type: Types.SET_USER,
        payload: {
          user: decode,
        },
      });
      if (is_verified) {
        if (is_owner) {
          window.location.href = "//" + subdomain + ".localhost:3000/dashboard";
        } else {
          window.location.href = "//" + subdomain + ".localhost:3000/deliverys";
        }
      } else {
        history.push("/otp-add");
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: Types.USER_ERROR,
        payload: {
          error: error.response?.data,
        },
      });
    });
};
