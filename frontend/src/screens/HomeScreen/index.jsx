import React, {Fragment, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { useHistory } from 'react-router'

// Local imports
import "./HomeScreen.css"
import Product from "../../components/Product"
import Hero from '../../components/Hero'
import Newsletter from '../../components/Newsletter'
import { homeOne, homeTwo } from '../../constants/heroData'
import {listBestsellersProduct} from "../../actions/productActions"
import Message from "../../components/Message"
import Loader from "../../components/Loader"


function HomeScreen() {

   const {error, loading, products} = useSelector(state => state.bestsellersProducts)
   const dispatch = useDispatch();
   const BESTSELLERS_LIMIT = 4;
   
   useEffect(() => {
      dispatch(listBestsellersProduct(BESTSELLERS_LIMIT))
   }, [dispatch])

   const history = useHistory();

   // FIXME:  HARD CODED VALUE
   const shopNowHandler = () => {
      history.push("/headsets")
   }

   const findNowHandler = () => {
      history.push("/")
   }


   return (
      <Fragment>
            <Hero {...homeOne} handleClick={shopNowHandler}/>

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

         <Hero {...homeTwo} handleClick={findNowHandler}/>

         <Newsletter />
      </Fragment>
   )
}            

export default HomeScreen
