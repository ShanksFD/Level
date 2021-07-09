import axios from "axios";
import {
   SAVED_ADD_ITEM,
   SAVED_REMOVE_ITEM,
   SAVED_UPDATE_ITEMS
} from "../constants/savedConstants";

export const addToSaved = (id) => async (dispatch, getState) => {
   const { data } = await axios.get(`/api/products/id/${id}`);

   dispatch({
      type: SAVED_ADD_ITEM,
      payload: {
         product: data._id,
         name: data.name,
         image: data.image,
         price: data.price,
         countInStock: data.countInStock,
      },
   });
   localStorage.setItem("savedItems", JSON.stringify(getState().saved.savedItems));
};

export const removeFromSaved = (id) => (dispatch, getState) => {
   dispatch({
      type: SAVED_REMOVE_ITEM,
      payload: id,
   });
   localStorage.setItem("savedItems", JSON.stringify(getState().saved.savedItems));
};

export const updateSavedList = () => (dispatch, getState) => {
   dispatch({
      type: SAVED_UPDATE_ITEMS,
      payload: getState().saved.savedItems,
   });
};
