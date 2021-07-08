import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Local imports
import {productListReducer, productDetailsReducer, featuredProductReducer} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import { navTypeReducer } from "./reducers/navReducers";


const reducer = combineReducers({
   productList: productListReducer,
   productDetails: productDetailsReducer,
   featuredProduct: featuredProductReducer,
   cart: cartReducer,
   navType: navTypeReducer
});

const carItemsFromStorage = localStorage.getItem("cartItems")
   ? JSON.parse(localStorage.getItem("cartItems"))
   : [];

const initialState = {
   cart: {
      cartItems: carItemsFromStorage,
   }
};

const middleware = [thunk];

const store = createStore(
   reducer,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
