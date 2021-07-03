import React from 'react'
import {Image, Button, Row, Col, Container} from 'react-bootstrap'

// Local imports
import './Hero.css'
import krakenUltImg from '../../assets/img/kraken-ult.png'
// import twitterSvg from '../../assets/img/icons/twitter.svg'
// import facebookSvg from '../../assets/img/icons/facebook.svg'
// import githubSvg from '../../assets/img/icons/github.svg'
// import instagramSvg from '../../assets/img/icons/instagram.svg'

function Hero() {
   return (
      <Container>
         <Row className="flex-row hero">
            <Col className="my-auto mx-auto "  lg={6}>
               <Row>
                  <h1>Exclusive products & accessories</h1>
               </Row>
               <Row className="d-sm-flex d-lg-block d-xl-block d-md-block justify-content-center">
                  <Button variant="dark">SHOP NOW</Button>
               </Row>
            </Col>

            <Col className="mx-auto" lg={6}>
               <Image src={krakenUltImg} fluid/>
            </Col>
         </Row>
      </Container>
   )
}

export default Hero