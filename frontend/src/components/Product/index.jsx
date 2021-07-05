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
            <i className={fav} aria-hidden="true" onClick={() => {
                  fav === "fa fa-heart-o fff" ? setFav("fa fa-heart fff") : setFav("fa fa-heart-o fff")
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
