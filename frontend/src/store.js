import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Local imports
import {productDetailsReducer, featuredProductReducer, productListCategoryReducer, bestsellersProductsReducer} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import { navTypeReducer } from "./reducers/navReducers";
import { savedReducer } from "./reducers/savedReducers";
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateReducer, userListReducer, userDeleteReducer } from "./reducers/userReducers";
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderDeliverReducer, orderListReducer} from "./reducers/orderReducers";

const reducer = combineReducers({
   productDetails: productDetailsReducer,
   featuredProduct: featuredProductReducer,
   productListCategory: productListCategoryReducer,
   bestsellersProducts: bestsellersProductsReducer,
   
   cart: cartReducer,

   saved: savedReducer,

   navType: navTypeReducer,

   userLogin: userLoginReducer,
   userRegister: userRegisterReducer,
   userDetails: userDetailsReducer,
   userUpdateProfile: userUpdateReducer,
   userList: userListReducer,
   userDelete: userDeleteReducer,

   orderCreate: orderCreateReducer,
   orderDetails: orderDetailsReducer,
   orderPay: orderPayReducer,
   orderDeliver: orderDeliverReducer,
   orderListMy: orderListReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
   ? JSON.parse(localStorage.getItem("cartItems"))
   : [];

const savedItemsFromStorage = localStorage.getItem("savedItems")
   ? JSON.parse(localStorage.getItem("savedItems"))
   : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
   ? JSON.parse(localStorage.getItem("userInfo"))
   : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
? JSON.parse(localStorage.getItem("shippingAddress"))
: {};

const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
   ? JSON.parse(localStorage.getItem("paymentMethod"))
   : {};

const initialState = {
   cart: {
      cartItems: cartItemsFromStorage,
      shippingAddress: shippingAddressFromStorage,
      paymentMethod: paymentMethodFromStorage
   },
   saved: {
      savedItems: savedItemsFromStorage
   },
   userLogin: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(
   reducer,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
