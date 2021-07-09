import React from 'react'
import { Image, Container, Row, Col } from 'react-bootstrap'

// Local Imports
import "./ContactScreen.css"
import contactBackground from "../../assets/img/contact_background.jpg"


function ContactScreen() {
   return (
      <div className="contact">
         <Image src={contactBackground} fluid/>
         <Container>
            <div className="contact-container">
               <h2>CORPORATE OFFICES</h2>
               <div className="hr"></div>
               <Row className="d-flex justify-content-center">
                     <Col>
                        <ul>
                           <li><strong>Americas</strong></li>
                           <li>7700 Gateway Blvd.</li>
                           <li>Newark, CA 94560 USA</li>
                           <li>+1 510-795-8500</li>
                           <li>Monday - Friday, 8:00am - 5:00pm PST</li>
                        </ul>
                     </Col>

                     <Col>
                        <ul>
                           <li>Logitech Europe S.A.</li>
                           <li>EPFL - Quartier de l'Innovation</li>
                           <li>CH - 1015 Lausanne</li>
                           <li>+41 (0)21 863 55 11</li>
                           <li>+41 (0)21 863 55 12</li>
                        </ul>
                     </Col>

                     <Col>
                        <ul>
                           <li>Logitech Audio Group - Business Office</li>
                           <li>4700 NW Camas Meadows Drive</li>
                           <li>Camas, WA  98607</li>
                           <li>Monday - Friday, 8:00am - 5:00pm PT</li>
                        </ul>
                     </Col>
               </Row>
            </div>
         </Container>
      </div>
   )
}

export default ContactScreen
