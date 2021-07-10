import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {LinkContainer} from "react-router-bootstrap"

// Local imports
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { getUserDetails, updateUserProfile } from "../../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants'
import "./ProfileScreen.css"
import { listMyOrders } from '../../actions/orderActions'
// import { Link } from "react-router-dom";

function ProfileScreen({history}) {
   const [email, setEmail] = useState("");
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");
   const [passwordConfirmation, setPasswordConfirmation] = useState("");
   const [message, setMessage] = useState("");


   const dispatch = useDispatch();

   const userDetails = useSelector((state) => state.userDetails);
   const { loading, error, user } = userDetails;

   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

   const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
   const { success } = userUpdateProfile;

   const orderListMy = useSelector(state => state.orderListMy)
   const {loading: loadingOrders, error: errorOrders, orders} = orderListMy

   useEffect(() => {
      if(!userInfo){
         history.push('/login')
      }else
      {
         if(!user || !user.name || success)
         {
            dispatch({type: USER_UPDATE_PROFILE_RESET})
            dispatch(getUserDetails('profile'))
            dispatch(listMyOrders())
         }else{
            setName(user.name)
            setEmail(user.email)
         }
      }
   }, [dispatch, history, userInfo, user, success])


   const submitHandler = (e) => {
      e.preventDefault();
      if (password !== passwordConfirmation) {
         setMessage("Password does not match");
      } else {
         dispatch(updateUserProfile({
            'id': user._id,
            'name': name,
            'email': email,
            'password': password
         }))
         setMessage('');
      }
   };
   return (
      <div className="profile container">
         {
            userInfo &&
            <Row className="py-5">
               <h1>My Account</h1>
               <hr/>
               <Col lg={8}>
                  <h5>Order History</h5>
                  {(
                     loadingOrders ?
                     <Loader/> :
                     errorOrders ?
                     <Message variant="danger">{errorOrders}</Message> :
                     (
                        <Table striped responsive className="table-sm">
                           <thead>
                              <tr>
                                 <th>ID</th>
                                 <th>Date</th>
                                 <th>Total</th>
                                 <th>Paid</th>
                                 <th>Delivred</th>
                              </tr>
                           </thead>
                           <tbody>
                              {orders.map(order => (
                                 <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.createdAt.substring(0, 10)}</td>
                                    <td>${order.totalPrice}</td>
                                    <td>{order.isPaid ? order.paidAt.substring(0, 10) : (
                                       <i className="fa fa-times" style={{color: "red"}}></i>
                                    )}</td>
                                    <td>
                                       <LinkContainer to={`/order/${order._id}`}>
                                          <Button className="btn-sm">Details</Button>
                                       </LinkContainer>
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                        </Table>
                     )
                  )}
               </Col>
               <Col lg={4}>
                  <h5>Account Details</h5>
                     {message && <Message variant="danger">{message}</Message>}
                     {loading && <Loader />}
                     {error && <Message variant="danger">{error}</Message>}
                     {success && <Message variant="success">{success}</Message>}
                     <Form onSubmit={submitHandler}>
                        <Form.Group controlId="name" className="my-4">
                           <Form.Label>Name</Form.Label>
                           <Form.Control
                              type="name"
                              placeholder="Enter name"
                              value={name}
                              onChange={(e) => {
                                 setName(e.target.value);
                              }}
                           ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="email" className="my-4">
                           <Form.Label>Email address</Form.Label>
                           <Form.Control
                              type="email"
                              placeholder="Enter Email"
                              value={email}
                              onChange={(e) => {
                                 setEmail(e.target.value);
                              }}
                           ></Form.Control>
                        </Form.Group>
                        
                        <Form.Group controlId="password" className="my-4">
                           <Form.Label>Password</Form.Label>
                           <Form.Control
                              type="password"
                              placeholder="Enter Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                           ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="passwordConfirmation" className="my-4">
                           <Form.Label>Confirm Password</Form.Label>
                           <Form.Control
                              type="password"
                              placeholder="Enter Password"
                              value={passwordConfirmation}
                              onChange={(e) => setPasswordConfirmation(e.target.value)}
                           ></Form.Control>
                        </Form.Group>
                        <Button type="submit" variant="primary">
                           Update
                        </Button>
                     </Form>
               </Col>
            </Row>
         }
      </div>
   )
}

export default ProfileScreen
