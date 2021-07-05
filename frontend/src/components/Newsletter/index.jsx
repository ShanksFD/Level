import React from 'react'
import { Row, Col, Button, Container, Image, Form } from 'react-bootstrap'

// Local imports
import newsletterSvg from "../../assets/img/newsletter.svg"
import "./Newsletter.css"

function Newsletter() {
   return (
      <div className="newsletter">
         <Container className="newsletter-content">
            <div className="newsletter-wrapper">
               <Image src={newsletterSvg} alt="newsletter" fluid />
               <h1>NEWSLETTER</h1>
               <h5>Keep up with our latest news and events. Subscribe to our newsletter.</h5>
               <Form>
                  <Row className="justify-content-center my-4">
                     <Col xs='auto' lg={8} className="py-2">
                        <Form.Control classtype="email" placeholder="Enter email"/>
                     </Col>
                     <Col xs='auto' lg={4} className="py-2">
                        <Button type="submit" className="mb-2">
                           SUBSCRIBE
                        </Button>
                     </Col>
                  </Row>
            </Form>
            </div>
         </Container>
      </div>
   )
}

export default Newsletter
