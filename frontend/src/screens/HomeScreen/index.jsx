import React, {Fragment} from 'react'

// Local imports
import "./HomeScreen.css"
import Product from "../../components/Product"
import productMamba from "../../assets/img/products/mamba.png"

function HomeScreen() {

   return (
      <Fragment>
         <div className="container bestsellers-container">
            <h1>BESTSELLERS</h1>
            <div className="products-wrapper">
               <Product title="Logitech Mamba" price="120" img={productMamba} alt="Logitech Mamba"/>
               <Product title="Logitech Mamba" price="120" img={productMamba} alt="Logitech Mamba"/>
               <Product title="Logitech Mamba" price="120" img={productMamba} alt="Logitech Mamba"/>
               <Product title="Logitech Mamba" price="120" img={productMamba} alt="Logitech Mamba"/>
            </div>
         </div>
      </Fragment>
   )
}            

export default HomeScreen
