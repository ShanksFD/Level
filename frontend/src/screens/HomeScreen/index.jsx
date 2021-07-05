import React, {Fragment} from 'react'

// Local imports
import "./HomeScreen.css"
import Product from "../../components/Product"
import Hero from '../../components/Hero'
import { homeOne, homeTwo, HomeTwo } from '../../constants/heroData'
// Images
import productMamba from "../../assets/img/products/mamba.png"

function HomeScreen() {

   return (
      <Fragment>
         <Hero {...homeOne}/>

         {/* Bestsellers Section */}
         <div className="container bestsellers-container">
            <h1>BESTSELLERS</h1>
            <div className="products-wrapper">
               <Product title="Logitech Mamba" price="120" img={productMamba} alt="Logitech Mamba"/>
               <Product title="Logitech Mamba" price="120" img={productMamba} alt="Logitech Mamba"/>
               <Product title="Logitech Mamba" price="120" img={productMamba} alt="Logitech Mamba"/>
               <Product title="Logitech Mamba" price="120" img={productMamba} alt="Logitech Mamba"/>
            </div>
         </div>

         <Hero {...homeTwo}/>
      </Fragment>
   )
}            

export default HomeScreen
