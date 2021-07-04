import React, {useState} from 'react'
import { Button } from 'react-bootstrap'

//Local imports   
import "./Product.css"

function Product({img, alt, price, title}) {
   const [fav, setFav] = useState("fa fa-heart-o")
   
   return (
      <div className="product">
         <div className="product-img-wrapper">
            <img src={img} alt={alt} className="w-100"/>
            <i class={fav} aria-hidden="true" onClick={() => {
               fav === "fa fa-heart-o" ? setFav("fa fa-heart") : setFav("fa fa-heart-o")
            }}></i>
         </div>
         <div className="product-body">
            <h2 className="product-title">{title}</h2>
            <p className="product-price">${price}</p>
         </div>
         <Button className="product-btn">SHOP NOW</Button>
      </div>
   )
}

export default Product
