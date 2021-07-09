import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Button, Container } from "react-bootstrap";

// Local imports
import Message from "../../components/Message";
import { addToSaved, removeFromSaved } from "../../actions/savedActions";
import './WishlistScreen.css'

function WishlistScreen({ match, location, history }) {
   const productId = match.params.id;

   const dispatch = useDispatch();
   const { savedItems } = useSelector((state) => state.saved);

   useEffect(() => {
      if (productId) {
         dispatch(addToSaved(productId));
      }
   }, [dispatch, productId]);

   const removeFromSavedHandler = (id) => {
      dispatch(removeFromSaved(id));
   };

   const checkoutHandler = () => {
      history.push("/login?redirect=shipping");
   };

   return (
      <Container>
         <h1 className="text-center my-4">Your Wishlist({savedItems.length})</h1>
         <Row className="wishlist d-flex justify-content-center">
            <Col md={8} className="wishlist-productInfos">
               {savedItems.length === 0 ? (
                  <Message variant="info">
                     Your wishlist is empty <Link to="/">Go Back</Link>
                  </Message>
               ) : (
                  <ListGroup variant="flush">
                     {savedItems.map((item) => (
                        <ListGroup.Item key={item.product}>
                           <Row className="align-items-center">
                              <Col xs={4} md={2} className="my-4">
                                 <Image
                                    src={item.image}
                                    alt={item.name}
                                    fluid
                                    rounded
                                 />
                              </Col>
                              <Col xs={3} md={3}>
                                 <Link to={`/product/${item.product}`}>
                                    {item.name}
                                 </Link>
                              </Col>
                              <Col xs={2} md={2}>${item.price}</Col>
                              <Col xs={2} md={3} className="my-1">
                                 <Button>ADD TO CARD</Button>
                              </Col>
                              <Col xs={1} md={1}>
                                 <Button
                                    type="button"
                                    variant="light"
                                    onClick={() =>
                                       removeFromSavedHandler(item.product)
                                    }
                                 >
                                    <i className="fa fa-times"></i>
                                 </Button>
                              </Col>
                           </Row>
                        </ListGroup.Item>
                     ))}
                  </ListGroup>
               )}
            </Col>
         </Row>
      </Container>
   );
}

export default WishlistScreen;
