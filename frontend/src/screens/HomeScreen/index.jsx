import React, {Fragment, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"

// Local imports
import "./HomeScreen.css"
import Product from "../../components/Product"
import Hero from '../../components/Hero'
import Newsletter from '../../components/Newsletter'
import { homeOne, homeTwo } from '../../constants/heroData'
import {listProducts} from "../../actions/productActions"

// Images
import productMamba from "../../assets/img/products/mamba.png"

function HomeScreen() {

   const {products} = useSelector(state => state.productList)
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(listProducts())
   }, [dispatch])
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
               {console.log(products)}
            </div>
         </div>

         <Hero {...homeTwo}/>

         <Newsletter />
      </Fragment>
   )
}            

export default HomeScreen
