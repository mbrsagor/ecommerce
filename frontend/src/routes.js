import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/about";
import LoginView from "./components/pages/auth/login";
import Auth from "./components/pages/auth/otp/auth";
import OTPAdd from "./components/pages/auth/otp/otpAdd";
import Registration from "./components/pages/auth/registration";
import ResetPassword from "./components/pages/auth/reset_password";
import Branding from "./components/pages/branding";
import WebSiteOring from "./components/pages/branding/WebSiteOring";
import Customers from "./components/pages/customers";
import Dashboard from "./components/pages/dashboard";
// Delivery
import Delivery from "./components/pages/delivery";
import Basket from "./components/pages/delivery/basket";
import ItemList from "./components/pages/delivery/items";
import ItemDetail from "./components/pages/delivery/items/itemDetail";
import MyItemList from "./components/pages/delivery/items/myItemList";
// Discounts
import Discounts from "./components/pages/discounts/";
import CreateDiscount from "./components/pages/discounts/add";
import Error from "./components/pages/error";
import HomePage from "./components/pages/home";
import Inventory from "./components/pages/inventory";
import LiveOrders from "./components/pages/live_orders";
import ItemsAndModifiers from "./components/pages/menu/ItemsAndModifiers";
import CreateItemAndModifiers from "./components/pages/menu/ItemsAndModifiers/CreateItemAndModifier";
import ViewItem from "./components/pages/menu/ItemsAndModifiers/edit";
import EditItem from "./components/pages/menu/ItemsAndModifiers/edit/EditItem";
// sub component of menu
import Menus from "./components/pages/menu/menus";
import CreateMenu from "./components/pages/menu/menus/CreateMenu";
import ViewMenu from "./components/pages/menu/menus/edit";
import EditMenu from "./components/pages/menu/menus/edit/EditMenu";
import ModifiersList from "./components/pages/menu/modifiers_lists";
import CreateModifierList from "./components/pages/menu/modifiers_lists/CreateModifierList";
import ModifierDetails from "./components/pages/menu/modifiers_lists/ModifierDetails";
import ModifierUpate from "./components/pages/menu/modifiers_lists/ModifierUpate";
import OrderDelivery from "./components/pages/orderDelivery/orderDelivery";
import OrderHistory from "./components/pages/order_history";
import Outlets from "./components/pages/outlets";
import CreateOutlet from "./components/pages/outlets/CreateOutlet";
import PauseOrder from "./components/pages/pause_orders";
// Profile component
import Profile from "./components/pages/profile";
// users
import Users from "./components/pages/users";
// Private router
import PrivateRoute from "./utils/PrivateRoute";
import UserRegistration from "./components/pages/auth/registration/UserRegistration";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/about" component={About} />
        <PrivateRoute path="/inventory" component={Inventory} />
        <PrivateRoute path="/live-orders" component={LiveOrders} />
        <PrivateRoute path="/pause-orders" component={PauseOrder} />
        <PrivateRoute path="/order-history" component={OrderHistory} />
        <PrivateRoute path="/pause-orders" component={PauseOrder} />
        <PrivateRoute path="/order-history" component={OrderHistory} />
        <PrivateRoute path="/customers" component={Customers} />
        <PrivateRoute path="/outlets" component={Outlets} />
        <PrivateRoute path="/create-outlet" component={CreateOutlet} />
        <Route path="/login" component={LoginView} />
        <Route path="/registration" component={Registration} />
        <Route path="/user-registration" component={UserRegistration} />
        <PrivateRoute path="/menus" component={Menus} />
        <PrivateRoute path="/menu-create" component={CreateMenu} />
        <PrivateRoute path="/view-menu-item/:id" component={ViewMenu} />
        <PrivateRoute path="/edit-menu/:id" component={EditMenu} />
        <PrivateRoute path="/items-modifiers" component={ItemsAndModifiers} />
        <PrivateRoute
          path="/create-item-modifier"
          component={CreateItemAndModifiers}
        />
        <PrivateRoute path="/menu-edit-items-modifiers" component={EditItem} />
        <PrivateRoute path="/view-modifier-item/:id" component={ViewItem} />
        <PrivateRoute path="/modifiers-list" component={ModifiersList} />
        <PrivateRoute path="/create-modifier" component={CreateModifierList} />
        <PrivateRoute
          path="/modifier-details/:id"
          component={ModifierDetails}
        />
        <PrivateRoute path="/modifier-update/:id" component={ModifierUpate} />
        <PrivateRoute path="/my-profile" component={Profile} />
        <PrivateRoute path="/users" component={Users} />
        <PrivateRoute path="/website-ordering" component={WebSiteOring} />
        <PrivateRoute path="/branding" component={Branding} />
        <Route path="/deliverys" component={OrderDelivery} />
        <PrivateRoute path="/discounts" component={Discounts} />
        <PrivateRoute path="/create-discount" component={CreateDiscount} />
        <Route path="/delivery" component={Delivery} />
        <Route path="/delivery-itemlist/:locationID" component={ItemList} />
        <Route path="/delivery-myitemlist/:locationID" component={MyItemList} />
        <Route path="/:locationID/basket" component={Basket} />
        <Route
          path="/:locationID/item-details/:itemID"
          component={ItemDetail}
        />
        <Route path="/auth" component={Auth} />
        <Route path="/otp-add" component={OTPAdd} />
        <Route path="/password-reset" component={ResetPassword} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
};

export default Routes;
