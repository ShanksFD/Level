import React, {Fragment, useEffect, useState} from 'react'
import { Container, NavDropdown, Row} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'

// Local imports
import "./MiceScreen.css"
import { toggleNav } from "../../actions/navActions";
import {listProductCategory, listFeaturedProduct} from "../../actions/productActions"
import ProductHero from '../../components/ProductHero'
import {mice} from "../../constants/heroData"
import Message from "../../components/Message"
import Loader from "../../components/Loader"
import Product from "../../components/Product"
import {CATEGORY_MICE, sortType} from "../../constants/utilityConstants"

function MiceScreen() {
   const [sort, setSort] = useState(sortType.FEATURED)
   const {error, loading, products} = useSelector(state => state.productListCategory)
   const featuredProduct = useSelector(state => state.featuredProduct)

   const history = useHistory()
   const dispatch = useDispatch()

   const handleSortClick = (e) => {
      setSort(e.target.innerHTML)
   }

   useEffect(() => {
      dispatch(listProductCategory(sort, CATEGORY_MICE))
      dispatch(toggleNav(mice.bgColor))
      dispatch(listFeaturedProduct(CATEGORY_MICE))

      // FIXME: HARD CODED VALUE
      var historyListener = history.listen((location) => { 
         if(location.pathname !== "/mice")
            dispatch(toggleNav())
            
         historyListener()
      }) 
   }, [dispatch, history, sort])

   return (
      <Fragment>
          <div className="pr">
            
               <ProductHero {...mice} image={featuredProduct.product.image} desc={featuredProduct.product.name}/>
               <Container>
                  <Row>
                     <NavDropdown title={`SORT: ${sort}`} id="pr-nav-dropdown">
                        <NavDropdown.Item onClick={handleSortClick}>{sortType.FEATURED}</NavDropdown.Item> 
                        <NavDropdown.Item onClick={handleSortClick}>{sortType.NEWEST}</NavDropdown.Item> 
                        <NavDropdown.Item onClick={handleSortClick}>{sortType.LTH}</NavDropdown.Item> 
                        <NavDropdown.Item onClick={handleSortClick}>{sortType.HTL}</NavDropdown.Item> 
                     </NavDropdown>
                  </Row>
                  <Row>
                     <div className="pr-wrapper">
                        {error ? <Message variant="danger">{error}</Message>
                        : loading ? <Loader /> 
                        :
                           products.map((product) => (
                              <Product key={product._id} 
                                          id={product._id} 
                                          name={product.name} 
                                          price={product.price} i
                                          image={product.image} 
                                          alt={product.name}/>
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
