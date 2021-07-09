import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Local imports
import {productDetailsReducer, featuredProductReducer, productListCategoryReducer, bestsellersProductsReducer} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import { navTypeReducer } from "./reducers/navReducers";
import { savedReducer } from "./reducers/savedReducers";
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateReducer } from "./reducers/userReducers";

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

const initialState = {
   cart: {
      cartItems: cartItemsFromStorage,
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
