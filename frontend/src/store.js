import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Local imports
import {productDetailsReducer, featuredProductReducer, productListCategoryReducer, bestsellersProductsReducer} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import { navTypeReducer } from "./reducers/navReducers";
import { savedReducer } from "./reducers/savedReducers";


const reducer = combineReducers({
   productDetails: productDetailsReducer,
   featuredProduct: featuredProductReducer,
   productListCategory: productListCategoryReducer,
   bestsellersProducts: bestsellersProductsReducer,
   cart: cartReducer,
   saved: savedReducer,
   navType: navTypeReducer
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
   ? JSON.parse(localStorage.getItem("cartItems"))
   : [];

const savedItemsFromStorage = localStorage.getItem("savedItems")
? JSON.parse(localStorage.getItem("savedItems"))
: [];

const initialState = {
   cart: {
      cartItems: cartItemsFromStorage,
   },
   saved: {
      savedItems: savedItemsFromStorage
   }
};

const middleware = [thunk];

const store = createStore(
   reducer,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
