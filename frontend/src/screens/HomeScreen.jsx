import React, {Fragment} from 'react'
import { Col, Row } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";

// Local imports
import Hero from '../components/Hero'
import ContainerCentered from '../components/ContainerCentered'
import ProductFigure from '../components/ProductFigure'

// Images
import productSC1 from '../assets/img/product-sc-1.png'
import productSC2 from '../assets/img/product-sc-2.png'
import productSC3 from '../assets/img/product-sc-3.png'
import productSC4 from '../assets/img/product-sc-4.png'

function HomeScreen() {

   return (
      <Fragment>
         <Hero/>
         <ContainerCentered title="WE'RE ALL GAMERS">
            <Row className="justify-content-center align-items-stretch">
               <Col lg={6} md={6}  className="mb-4 mb-lg-0">
                  <ProductFigure image={productSC1}>
                     <h2 className="overlay-text">CONSOLES</h2>
                     <LinkContainer  to=""><p>SHOP NOW</p></LinkContainer>
                  </ProductFigure>

                  <ProductFigure image={productSC3}>
                     <h2 className="overlay-text">ACCESSORIES</h2>
                     <LinkContainer  to=""><p>SHOP NOW</p></LinkContainer>
                  </ProductFigure>
               </Col>
               <Col lg={6} md={6}  className="mb-4">
                  <ProductFigure image={productSC2}>
                     <h2 className="overlay-text">HEADSETS</h2>
                     <LinkContainer  to=""><p>SHOP NOW</p></LinkContainer>
                  </ProductFigure>

                  <ProductFigure image={productSC4}>
                     <h2 className="overlay-text">CAMERAS</h2>
                     <LinkContainer  to=""><p>SHOP NOW</p></LinkContainer>
                  </ProductFigure>
               </Col>
            </Row>
         </ContainerCentered>
      </Fragment>
   )
}

export default HomeScreen
