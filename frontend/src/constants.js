const BASE_URL = process.env.REACT_APP_BACKEND_API || "http://localhost:8000";
const apiURL = "/api";

export const endpoint = `${BASE_URL}${apiURL}`;

export const account = `${endpoint}/accounts`;
export const restaurant = `${endpoint}/restaurants`;
export const restaurantDiscountURL = `${restaurant}/restaurant-discount`;

export const loginURL = `${account}/login/`;
export const signupURL = `${account}/register/`;
export const passwordChangeURL = (id) => `${account}/password-change/${id}/`;
export const accountUpdateURL = (id) => `${account}/${id}/update-account/`;
export const accountDetailURL = (id) => `${account}/${id}/account/`;
export const sendOtpCodeURL = (phone_number) =>
  `${account}/send-otp-code/${phone_number}/`;
export const otpCodeWiseUserURL = (phone_number) =>
  `${account}/otp-codewise-user/${phone_number}/`;
export const verifyUserURL = (phone_number) =>
  `${account}/verify-user/${phone_number}/`;
export const smsGetWayURL = (phone_number, otp_code) =>
  `http://alphasms.biz/index.php?app=ws&u=OnnowPayment&h=f9ea0babc2ce2908e900a1f70c09ecab&op=pv&to=${phone_number}&msg=Your otp code is ${otp_code}`;

export const restaurantCreateURL = `${restaurant}/my-restaurant/`;
export const updateSubdomainURL = (id) => `${restaurant}/my-restaurant/${id}/`;

export const restaurantUserListURL = (subdomain) =>
  `${restaurant}/restaurant-users/${subdomain}/`;
export const locationListURL = `${restaurant}/location/`;
export const addRestaurantURL = `${restaurant}/restaurant-user/`;
export const restaurantOrderURL = `${restaurant}/restaurant-order/`;
export const restaurantOrderDeliveryURL = `${restaurant}/order-delivery/`;
export const userIDURL = `${restaurant}/user-id/`;
export const itemListURL = `${restaurant}/items/`;
export const itemDetailURL = (id) => `${restaurant}/items/${id}/`;
export const orderItemDeleteURL = (id) =>
  `${restaurant}/order-item/${id}/delete/`;
export const orderItemUpdateURL = `${restaurant}/order-item/update/`;
export const liveOrdersAll = `${restaurant}/live-order/${0}/`;
export const liveOrdersNew = `${restaurant}/live-order/${1}/`;
export const liveOrdersKitchen = `${restaurant}/live-order/${2}/`;
export const liveOrdersReadyURL = `${restaurant}/live-order/${3}/`;
export const addToCartURL = `${restaurant}/add-to-cart/`;
export const orderSummaryURL = `${restaurant}/order-summary/`;
export const InventoryURL = `${restaurant}/inventory/`;
export const checkoutURL = `${restaurant}/checkout/`;
export const addCouponURL = `${restaurant}/add-coupon/`;
export const addressListURL = (addressType) =>
  `${restaurant}/addresses/?address_type=${addressType}`;
export const addressCreateURL = `${restaurant}/addresses/create/`;
export const addressUpdateURL = (id) => `${restaurant}/addresses/${id}/update/`;
export const addressDeleteURL = (id) => `${restaurant}/addresses/${id}/delete/`;
export const outLetURL = `${restaurant}/outlet/`;
export const paymentListURL = `${restaurant}/payments/`;
export const menusURL = `${restaurant}/menus/`;
export const modifierURL = `${restaurant}/modifier/`;
export const brandingURL = `${restaurant}/branding/`;
export const orderURL = `${restaurant}/order`;
export const addRestaurantUser = (subdomain) =>
  `${restaurant}/add-user-restaurant/${subdomain}/`;
