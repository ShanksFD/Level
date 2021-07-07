import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Form, Button, Container } from "react-bootstrap";

// Local imports
import Message from "../../components/Message";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import './CartScreen.css'

function CartScreen({ match, location, history }) {
   const productId = match.params.id;
   const qty = location.search ? Number(location.search.split("=")[1]) : 1;

   const dispatch = useDispatch();
   const cart = useSelector((state) => state.cart);
   const { cartItems } = cart;

   useEffect(() => {
      if (productId) {
         dispatch(addToCart(productId, qty));
      }
   }, [dispatch, productId, qty]);

   const removeFromCartHandler = (id) => {
      dispatch(removeFromCart(id));
   };

   const checkoutHandler = () => {
      history.push("/login?redirect=shipping");
   };

   return (
      <Container>
         <h1 className="text-center my-4">Your Shopping Cart</h1>
         <Row className="cart">
            <Col md={8} className="cart-productInfos">
               {cartItems.length === 0 ? (
                  <Message variant="info">
                     Your cart is empty <Link to="/">Go Back</Link>
                  </Message>
               ) : (
                  <ListGroup variant="flush">
                     {cartItems.map((item) => (
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
                                 <Form.Control
                                    as="select"
                                    value={item.qty}
                                    onChange={(e) =>
                                       dispatch(
                                          addToCart(
                                             item.product,
                                             Number(e.target.value)
                                          )
                                       )
                                    }
                                 >
                                    {[...Array(item.countInStock).keys()].map(
                                       (x) => (
                                          <option value={x + 1} key={x + 1}>
                                             {x + 1}
                                          </option>
                                       )
                                    )}
                                 </Form.Control>
                              </Col>
                              <Col xs={1} md={1}>
                                 <Button
                                    type="button"
                                    variant="light"
                                    onClick={() =>
                                       removeFromCartHandler(item.product)
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
            <Col md={4} className="cart-checkout">
                  <ListGroup variant="flush">
                     <ListGroup.Item>
                        {/* Shipping Section */}
                        <h2 className="my-4">
                           Shipping
                        </h2>

                        {/* Shipping Infos */}
                        <Form.Group as={Row}>
                           <Col sm={10}>
                           <Form.Check
                              type="radio"
                              label="Ground Shipping - 2 to 5 business days: FREE"
                              name="formShippingRadios"
                              id="formship1"
                              defaultChecked
                           />
                           <Form.Check
                              type="radio"
                              label="Expedite - 2 to 3 days: $50"
                              name="formShippingRadios"
                              id="formship2"
                           />
                           <Form.Check
                              type="radio"
                              label="Overnight - Next Day: $140"
                              name="formShippingRadios"
                              id="formship3"
                           />
                           </Col>
                        </Form.Group>

                        {/* Address Section */}
                        <h2 className="my-4">Address</h2>
                        <Form.Group controlId="country" className="my-4">
                           <Form.Control type="text" placeholder="Country" />
                        </Form.Group>

                        <Form.Group controlId="address" className="my-4">
                           <Form.Control type="text" placeholder="Address" />
                        </Form.Group>

                        <Form.Group controlId="city" className="my-4">
                           <Form.Control type="text" placeholder="City" />
                        </Form.Group>

                        <Form.Group controlId="postalCode" className="my-4">
                           <Form.Control type="text" placeholder="Postal Code" />
                        </Form.Group>
                        <Button className="w-100">UPDATE</Button>

                        {/* Total Section */}
                        <Row className="my-4">
                           <Col>
                              Tax
                           </Col>
                           <Col>
                              $
                              {cartItems
                              .reduce((acc, item) => acc + item.qty * item.price, 0)
                              .toFixed()}
                           </Col>
                        </Row>
                        
                        <Row className="my-4">
                           <Col>
                              Total
                           </Col>
                           <Col>
                              $
                              {cartItems
                              .reduce((acc, item) => acc + item.qty * item.price, 0)
                              .toFixed()}
                           </Col>
                        </Row>
                     </ListGroup.Item>
                     <ListGroup.Item>
                        <Button
                           type="button"
                           className="w-100"
                           disabled={cartItems.length === 0}
                           onClick={checkoutHandler}
                        >
                           PROCEED TO CHECKOUT
                        </Button>
                     </ListGroup.Item>
                  </ListGroup>
            </Col>
         </Row>
      </Container>
   );
}

export default CartScreen;
