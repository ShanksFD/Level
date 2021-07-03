import React from 'react'
import {Image, Button, Navbar, Nav, Row, Col} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";

// Local imports
import './Hero.css'
import krakenUltImg from '../../assets/img/kraken-ult.png'
import twitterSvg from '../../assets/img/icons/twitter.svg'
import facebookSvg from '../../assets/img/icons/facebook.svg'
import githubSvg from '../../assets/img/icons/github.svg'
import instagramSvg from '../../assets/img/icons/instagram.svg'

function Hero() {
   return (
      <div className="hero-container">
         <Row className="flex-row">
            <Col>
               <div className="itemDesc">
                  <h1>Exclusive products & accessories</h1>
                  <Button variant="dark">SHOP NOW</Button>
               </div>
            </Col>

            <Col>
               <Image src={krakenUltImg}/>
            </Col>

            <Col>
               <Navbar>
                  <Nav>
                     <LinkContainer to="/">
                        <Nav.Link><Image src={facebookSvg} alt="facebook-icon" className="nav-icon" /></Nav.Link>
                     </LinkContainer>

                     <LinkContainer to="/">
                     <Nav.Link><Image src={instagramSvg} alt="instagram-icon" className="nav-icon" /></Nav.Link>
                     </LinkContainer>

                     <LinkContainer to="/">
                     <Nav.Link><Image src={twitterSvg} alt="twitter-icon" className="nav-icon" /></Nav.Link>
                     </LinkContainer>

                     <LinkContainer to="/">
                     <Nav.Link><Image src={githubSvg} alt="github-icon" className="nav-icon" /></Nav.Link>
                     </LinkContainer>
                  </Nav>
               </Navbar>
            </Col>
         </Row>
      </div>
   )
}

export default Hero