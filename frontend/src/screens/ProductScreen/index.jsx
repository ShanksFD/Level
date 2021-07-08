
import React, { useEffect, useState } from "react";
import {Row, Col, Image, Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { listProductDetails } from "../../actions/productActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Rating from "../../components/Rating";
import "./ProductScreen.css"
import { LG_SIZE } from "../../constants/sizeConstants";

function ProductScreen({ match, history }) {
   const [isMobile, setIsMobile] = useState(false);
   const [qty, setQty] = useState(1);
   const dispatch = useDispatch();
   const productDetails = useSelector((state) => state.productDetails);
   const { error, loading, product } = productDetails;
   const [fav, setFav] = useState("fa fa-heart-o")

   const historyRouter = useHistory();

   const addToList = () => 
   {
      fav === "fa fa-heart-o" ? setFav("fa fa-heart") : setFav("fa fa-heart-o")
      console.log("Add to list")
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

      //toggleMobileScreen();
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
                           <Col><i className={fav} onClick={addToList}></i></Col>
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
