import React, {Fragment, useEffect, useState} from 'react'
import { Container, NavDropdown, Row} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'

// Local imports
import "./MiceScreen.css"
import { toggleNav } from "../../actions/navActions";
import {listProducts, listFeaturedProduct} from "../../actions/productActions"
import ProductHero from '../../components/ProductHero'
import {mice} from "../../constants/heroData"
import Message from "../../components/Message"
import Loader from "../../components/Loader"
import Product from "../../components/Product"
import {MICE} from "../../constants/categoryConstants"

function MiceScreen({location}) {
   const sortType = {
      FEATURED: "FEATURED",
      NEWEST: "NEWST",
      LTH: "HOW TO HIGH",
      HTL: "HIGH TO LOW",
   }

   const [sort, setSort] = useState(sortType.FEATURED)
   const {error, loading, products} = useSelector(state => state.productList)
   const featuredProduct = useSelector(state => state.featuredProduct)

   const history = useHistory()
   const dispatch = useDispatch()

   const handleSortClick = (e) => {
      setSort(e.target.innerHTML)
   }


   useEffect(() => {
      dispatch(listProducts())
      dispatch(toggleNav())
      dispatch(listFeaturedProduct(MICE))

      // FIXME: HARD CODED VALUE
      var historyListener = history.listen((location) => { 
         if(location.pathname !== "/mice")
            dispatch(toggleNav())
            
         historyListener()
      }) 
   }, [dispatch, history])

   return (
      <Fragment>
          <div className="mice">
            <div className="nav-show"></div>
               <ProductHero {...mice} image={featuredProduct.product.image} desc={featuredProduct.product.name}/>
               <Container>
                  <Row>
                     <NavDropdown title={`SORT: ${sort}`} id="mice-nav-dropdown">
                        <NavDropdown.Item onClick={handleSortClick}>{sortType.FEATURED}</NavDropdown.Item> 
                        <NavDropdown.Item onClick={handleSortClick}>{sortType.NEWEST}</NavDropdown.Item> 
                        <NavDropdown.Item onClick={handleSortClick}>{sortType.LTH}</NavDropdown.Item> 
                        <NavDropdown.Item onClick={handleSortClick}>{sortType.HTL}</NavDropdown.Item> 
                     </NavDropdown>
                  </Row>
                  <Row>
                     <div className="mice-wrapper">
                        {error ? <Message variant="danger">{error}</Message>
                        : loading ? <Loader /> 
                        :
                           products.map(product => (
                              <Product key={product._id} id={product._id} name={product.name} price={product.price} image={product.image} alt={product.name}/>
                        )) 
                        }
                     </div>
                  </Row>
               </Container>
           
         </div>
      </Fragment>
   )
}

export default MiceScreen
