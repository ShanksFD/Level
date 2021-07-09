
import React, { useEffect, useState } from "react";
import {Row, Col, Image, Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { listProductDetails } from "../../actions/productActions";
import { addToSaved, removeFromSaved } from "../../actions/savedActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Rating from "../../components/Rating";
import "./ProductScreen.css"
import { LG_SIZE } from "../../constants/sizeConstants";

function ProductScreen({ match, history }) {
   const HEART = {
      on: "fa fa-heart",
      off: "fa fa-heart-o"
   }
   const [isMobile, setIsMobile] = useState(false);
   const [qty, setQty] = useState(1);

   
   const { error, loading, product } = useSelector((state) => state.productDetails);
   const {savedItems} = useSelector(state => state.saved)
   
   const historyRouter = useHistory();
   const dispatch = useDispatch();
   
   // Wishlist section
   var isSaved = false;
   const initIsSaved = () => {
      for(var i = 0; i < savedItems.length; i++) {
         if (savedItems[i].product === match.params.id) {
            isSaved = true;
            break;
         }
      }
   }
   initIsSaved();
   
   const [fav, setFav] = useState(isSaved ? HEART.on : HEART.off)

   const addToList = () => 
   {
      dispatch(addToSaved(match.params.id))
   }

   const removeFromList = () => 
   {
      dispatch(removeFromSaved(match.params.id))
   }

   const addToCartHandler = () => {
      history.push(`/cart/${match.params.id}?qty=${qty}`);
   };

   const toggleMobileScreen = () => {
      if(window.innerWidth < LG_SIZE)
         setIsMobile(true)
      else
         setIsMobile(false)
   }

   useEffect(() => {
      dispatch(listProductDetails(match.params.id));

      toggleMobileScreen();
   }, [dispatch, match.params.id]);

   // Add a listener to resize keyEvent 
   // Toggle showMobileNav when the window reachs Medium size or bellow
   window.addEventListener('resize', toggleMobileScreen)


   return (
      <Container>
         {loading ? (
            <Loader />
         ) : error ? (
            <Message variant="danger">{error}</Message>
         ) : (
            <div className="productSc-container">
               {!isMobile &&
                  <Button className="btn-dark my-3" onClick={() => {historyRouter.goBack()}}>
                     Go back
                  </Button>          
               }

               <Row className="productSc-wrapper"> 
                  {/* Product Image */}
                  <Col md={5}>
                     <div className="productSc-img-wrapper">
                        <Image src={product.image} alt={product.name} fluid />
                     </div>
                  </Col>

                  {/* Product desc */}
                  <Col md={5}>
                     <Row  className="productSc-details">
                        <Col>
                           <h1>{product.name}</h1>
                        </Col>

                        <Col>
                           <Rating
                              value={product.rating}
                              text={`${product.numReviews} reviews`}
                              color="#55595c"
                           />
                        </Col>

                        <Col className="productSc-price">${product.price}</Col>

                        <Col className="productSc-desc"><pre>{product.description}</pre></Col>
                     </Row>
                           <Row className="productSc-buyInfo">
                              {product.countInStock > 0 && (
                                 <Col xs={3} md={5}>
                                    <Form.Control
                                       as="select"
                                       value={qty}
                                       onChange={(e) =>
                                          setQty(e.target.value)
                                       }
                                    >
                                       {[
                                          ...Array(
                                             product.countInStock
                                          ).keys(),
                                       ].map((x) => (
                                          <option value={x + 1} key={x + 1}>
                                             {x + 1}
                                          </option>
                                       ))}
                                    </Form.Control>
                              </Col>
                              )}

                              <Col xs={5} md={5}>
                                 <Button
                                    disabled={product.countInStock === 0}
                                    type="button"
                                    onClick={addToCartHandler}
                                 >
                                    Add to Cart
                                 </Button>
                              </Col>
                        </Row>
                        <Row className="productCs-addto">
                           <Col><i className={fav} onClick={() => {
                                 if(fav === HEART.off)
                                 {
                                    addToList()
                                    setFav(HEART.on)
                                 }
                                 else
                                 {
                                    removeFromList()
                                    setFav(HEART.off)
                                 }
                           }}></i></Col>
                           <Col>ADD TO WISHLIST</Col>
                        </Row>
                  </Col>
               </Row>
            </div>
         )}
      </Container>
   );
}

export default ProductScreen;
