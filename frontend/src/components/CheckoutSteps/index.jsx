import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

function CheckoutSteps({ step1, step2, step3, step4}) {
   return (
      <Breadcrumb className="d-flex justify-content-center mb-4">
         <Breadcrumb.Item href="/login" active={!step1}>
            Login
         </Breadcrumb.Item>
            
         <Breadcrumb.Item href="/order" active={!step2}>
            Order
         </Breadcrumb.Item>

         <Breadcrumb.Item href="/payment" active={!step3}>
            Payment
         </Breadcrumb.Item>

         <Breadcrumb.Item href="/place-order" active={!step4}>
            Place Order
         </Breadcrumb.Item>
      </Breadcrumb>
   )
}

export default CheckoutSteps
