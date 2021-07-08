import React, {Fragment, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"

// Local imports
import "./HomeScreen.css"
import Product from "../../components/Product"
import Hero from '../../components/Hero'
import Newsletter from '../../components/Newsletter'
import { homeOne, homeTwo } from '../../constants/heroData'
import {listProducts} from "../../actions/productActions"
import Message from "../../components/Message"
import Loader from "../../components/Loader"


function HomeScreen() {

   const {error, loading, products} = useSelector(state => state.productList)
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
               {error ? <Message variant="danger">{error}</Message>
               : loading ? <Loader /> 
               :
                  products.map(product => (
                     <Product key={product._id} id={product._id} name={product.name} price={product.price} image={product.image} alt={product.name}/>
               )) 
               }
            </div>
         </div>

         <Hero {...homeTwo}/>

         <Newsletter />
      </Fragment>
   )
}            

export default HomeScreen
