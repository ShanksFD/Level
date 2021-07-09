import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import FormContainer from "../../components/FormContainer";
import { useSelector, useDispatch } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { register } from "../../actions/userActions";
import { Link } from "react-router-dom";

function RegisterScreen({ history, location }) {
   
   const [email, setEmail] = useState("");
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");
   const [passwordConfirmation, setPasswordConfirmation] = useState("");
   const [message, setMessage] = useState("");

   const dispatch = useDispatch();
   const userRegister = useSelector((state) => state.userRegister);
   const { loading, error, userInfo } = userRegister;
   const redirect = location.search ? location.search.split("=")[1] : "/";

   useEffect(() => {
      if(userInfo){
         history.push(redirect)
      }
   }, [history, userInfo, redirect])


   const submitHandler = (e) => {
      e.preventDefault();
      if (password !== passwordConfirmation) {
         setMessage("Password does not match");
      } else {
         dispatch(register(name, email, password));
      }
   };
   return (
      <FormContainer className="py-5">
         <div className="registerSc py-5">
            <h1>Sign up</h1>
            {message && <Message variant="danger">{message}</Message>}
            {loading && <Loader />}
            {error && <Message variant="danger">{error}</Message>}
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
                  Register
               </Button>
            </Form>
            <Row>
               <Col className="py-3">
                  Already have an account? <Link to={redirect}>Log in</Link>
               </Col>
            </Row>
         </div>
      </FormContainer>
   );
}

export default RegisterScreen;
