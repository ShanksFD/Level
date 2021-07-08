import React from 'react'
import {Image, Row, Col, Container} from 'react-bootstrap'

// Local imports
import "./ProductHero.css"

function ProductHero({title, image, bgColor, desc}) {
   return (
      <div className="heroProduct" style={{backgroundColor: bgColor}}>
         <Container className="heroProduct-content">
            <Row className="flex-row">
               <Col className="my-auto mx-auto heroProduct-title" lg={6}>
                  <Row className="heroProduct-text">
                     <h5>{desc}</h5>
                     <h1>{title}</h1>
                  </Row>
               </Col>

               <Col className="heroProduct-img-wrapper d-flex justify-content-center" lg={6}>
                  <Image src={image} fluid/>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default ProductHero
