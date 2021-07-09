import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

//Local imports   
import "./Product.css"
import {addToSaved, removeFromSaved} from "../../actions/savedActions"

function Product({image, price, name, id}) {
   const HEART = {
      on: "fa fa-heart",
      off: "fa fa-heart-o"
   }

   const {savedItems} = useSelector(state => state.saved)
   
   var isSaved = false;
   const initIsSaved = () => {
      for(var i = 0; i < savedItems.length; i++) {
         if (savedItems[i].product === id) {
            isSaved = true;
             break;
         }
     }
   }
   initIsSaved();

   const [fav, setFav] = useState(isSaved ? HEART.on : HEART.off)
   const dispatch = useDispatch();

   const addToList = () => 
   {
      dispatch(addToSaved(id))
   }

   const removeFromList = () => 
   {
      dispatch(removeFromSaved(id))
   }

   return (
      <div className="product">
         <div className="product-img-wrapper">
            <Link to={`/product/${id}`}>
               <img src={image} alt={name} className="w-100"/>
            </Link>
            <i className={fav} aria-hidden="true" onClick={() => {
                  if(fav === HEART.off)
                  {
                     addToList()
                     setFav(HEART.on)
                  }
                  else
                  {
                     removeFromList()
                     setFav(HEART.off)
                  }
            }}></i>
         </div>
         <div className="product-body">
            <h2 className="product-title">{name}</h2>
            <div className="product-price"><p>${price}</p></div>
         </div>
         <div className="product-btn">
            <Link to={`/product/${id}`}>
               <Button onClick={addToList} className="product-btn">SHOP NOW</Button>
            </Link>
         </div>
      </div>
   )
}

export default Product
