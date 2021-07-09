import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import FormContainer from "../../components/FormContainer";
import CheckoutSteps from "../../components/CheckoutSteps";
import { savePaymentMethod } from '../../actions/cartActions'

function PaymentScreen({ history }) {

   const cart = useSelector(state => state.cart)
   const { shippingAddress } = cart

   const dispatch = useDispatch()

   if (!shippingAddress.address) {
      history.push('/shipping')
   }

   const [paymentMethod, setPaymentMethod] = useState('Paypal')
   const submitHandler = (e) => {
      e.preventDefault()

      dispatch(savePaymentMethod(paymentMethod))
      history.push('/placeorder')
   }

   return (
      <FormContainer>
         <CheckoutSteps step1 step2 step3 />

         <div className="payment py-5 d-flex justify-content-center" style={{height: "60vh"}}>
            <Form onSubmit={submitHandler}>
               <Form.Group className="my-3">
                  <Form.Label as="legend">Select Method</Form.Label>
                  <Col>
                     <Form.Check
                        type="radio"
                        label="Paypal or Credit Card"
                        id="paypal"
                        name="paymentMethod"
                        checked
                        onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check>
                  </Col>
               </Form.Group>
               <Button type="submit" variant="primary">
                  Continue
               </Button>
            </Form>
         </div>
      </FormContainer >
   )
}

export default PaymentScreen
