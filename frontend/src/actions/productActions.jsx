import {
   PRODUCT_LIST_REQUEST,
   PRODUCT_LIST_SUCCESS,
   PRODUCT_LIST_FAIL,

   FEATURED_PRODUCT_FAIL,
   FEATURED_PRODUCT_REQUEST,
   FEATURED_PRODUCT_SUCCESS,

   BESTSELLERS_PRODUCTS_LIST_FAIL,
   BESTSELLERS_PRODUCTS_LIST_REQUEST,
   BESTSELLERS_PRODUCTS_LIST_SUCCESS,

   PRODUCT_DETAILS_FAIL,
   PRODUCT_DETAILS_REQUEST,
   PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstants";
import axios from "axios";
import {sortType} from "../constants/utilityConstants"

export const listProductCategory = (sort, category) => async (dispatch) => {
   try {
      dispatch({ type: PRODUCT_LIST_REQUEST });

      var {data} = {}
      switch(sort)
      {
         case sortType.FEATURED:
            ({ data } = await axios.get(`/api/products/featuredProducts/${category}`))
            break;
         case sortType.NEWEST:
            ({ data } = await axios.get(`/api/products/newestProducts/${category}`))
            break;
         case sortType.HTL:
            ({ data } = await axios.get(`/api/products/highPriceProducts/${category}`))
            break;
         case sortType.LTH:
            ({ data } = await axios.get(`/api/products/lowPriceProducts/${category}`))
            break;
         default:
            ({ data } = await axios.get(`/api/products/featuredProducts/${category}`))
      }
      dispatch({
         type: PRODUCT_LIST_SUCCESS,
         payload: data,
      });
   } catch (error) {
      dispatch({
         type: PRODUCT_LIST_FAIL,
         payload:
            error.response && error.response.data.detail
               ? error.response.data.detail
               : error.message,
      });
   }
};

export const listProductDetails = (id) => async function (dispatch) {
      try {
         dispatch({ type: PRODUCT_DETAILS_REQUEST });

         const { data } = await axios.get(`/api/products/id/${id}`);

         dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data,
         });
      } catch (error) {
         dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
               error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
         });
      }
   };

   export const listFeaturedProduct = (category) => async (dispatch) => {
      try {
         dispatch({ type: FEATURED_PRODUCT_REQUEST });
   
         const { data } = await axios.get(`/api/products/featuredProduct/${category}`);
            dispatch({
            type: FEATURED_PRODUCT_SUCCESS,
            payload: data,
         });
      } catch (error) {
         dispatch({
            type: FEATURED_PRODUCT_FAIL,
            payload:
               error.response && error.response.data.detail
                  ? error.response.data.detail
                  : error.message,
         });
      }
   };

   export const listBestsellersProduct = (limit) => async (dispatch) => {
      try {
         dispatch({ type: BESTSELLERS_PRODUCTS_LIST_REQUEST });
         const { data } = await axios.get(`/api/products/bestsellersProducts/${limit}`);

            dispatch({
            type: BESTSELLERS_PRODUCTS_LIST_SUCCESS,
            payload: data,
         });
      } catch (error) {
         dispatch({
            type: BESTSELLERS_PRODUCTS_LIST_FAIL,
            payload:
               error.response && error.response.data.detail
                  ? error.response.data.detail
                  : error.message,
         });
      }
   };