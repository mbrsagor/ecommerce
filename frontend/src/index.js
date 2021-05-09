import jwtDecode from "jwt-decode";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import "./css/style.scss";
import reportWebVitals from "./reportWebVitals";
import { WebsiteOrderingReducer } from "./store//reducers/websiteOrderingReducer";
import * as Types from "./store/actions/types";
import authReducer from "./store/reducers/auth";
import LoginAuthReducer from "./store/reducers/authReducer";
import { inventoryReducer } from "./store/reducers/inventoryReducer";
import {
  liveAllOrderReducer,
  liveKitchenOderReducer,
  liveNewOderReducer,
  liveReadyOderReducer,
} from "./store/reducers/liveOrderReducer";
import { menuReducer } from "./store/reducers/menuReducer";
import { menusPlateformReduer } from "./store/reducers/menusPlateformReduer";
import { modifierReduer } from "./store/reducers/modifierReducer";
import outletReducer from "./store/reducers/outletReducer";
import { passwordChangeReduer } from "./store/reducers/passwordChagneReducer";
import restaurantOrderReducer from "./store/reducers/restaurantOrderReducer";
import setAuthToken from "./utils/setAuthToken";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

// import cartReducer from "./store/reducers/cart";

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  login_auth: LoginAuthReducer,
  orders: restaurantOrderReducer,
  live_all_orders: liveAllOrderReducer,
  live_new_orders: liveNewOderReducer,
  live_kitchen_orders: liveKitchenOderReducer,
  live_ready_orders: liveReadyOderReducer,
  inventory: inventoryReducer,
  outlets: outletReducer,
  menus: menuReducer,
  menuPlatefrom: menusPlateformReduer,
  modifier: modifierReduer,
  passwordChange: passwordChangeReduer,
  website: WebsiteOrderingReducer,
  // cart: cartReducer
});

const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)));

// Save token globally
const token = localStorage.getItem("token");

if (token) {
  let decode = jwtDecode(token);
  setAuthToken(token);
  store.dispatch({
    type: Types.SET_USER,
    payload: {
      user: decode,
    },
  });
}

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

reportWebVitals();
