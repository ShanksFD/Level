import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

//Local imports   
import "./Product.css"

function Product({image, price, name, id}) {
   const [fav, setFav] = useState("fa fa-heart-o")
   
   return (
      <div className="product">
         <div className="product-img-wrapper">
            <Link to={`/product/${id}`}>
               <img src={image} alt={name} className="w-100"/>
            </Link>
            <i className={fav} aria-hidden="true" onClick={() => {
                  fav === "fa fa-heart-o" ? setFav("fa fa-heart") : setFav("fa fa-heart-o")
            }}></i>
         </div>
         <div className="product-body">
            <h2 className="product-title">{name}</h2>
            <div className="product-price"><p>${price}</p></div>
         </div>
         <div className="product-btn">
            <Link to={`/product/${id}`}>
               <Button className="product-btn">SHOP NOW</Button>
            </Link>
         </div>
      </div>
   )
}

export default Product
