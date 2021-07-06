import React from 'react'
import { Container, Row, Col, Image} from 'react-bootstrap'
import { Link } from "react-router-dom";

// Local imports
import "./Footer.css"
import facebookIcon from "../../assets/img/icons/facebook.svg"
import instagramIcon from "../../assets/img/icons/instagram.svg"
import twitterIcon from "../../assets/img/icons/twitter.svg"
import githubIcon from "../../assets/img/icons/github.svg"

function Footer() {
   return (
      <>
         <footer>
            <Container>
               <div className="footer-wrapper">
                  <Row className="d-flex justify-content-center">
                     <Col>
                        <ul>
                           <li className="footer-list-title level">Level.</li>
                           <li>Rue du moulin 142, Oued Zem, Morocco</li>
                           <li>info@level.com</li>
                           <li>+2120000000</li>
                        </ul>
                     </Col>

                     <Col>
                        <ul>
                           <li className="footer-list-title">Company</li>
                           <li>
                              <Link to="about-us">
                                 About us
                              </Link>
                           </li>
                           <li>
                              <Link to="contact-us">
                                 Contact us
                              </Link>
                           </li>
                        </ul>
                     </Col>

                     <Col>
                        <ul>
                           <li className="footer-list-title">SHOP</li>
                           <li>
                              <Link to="store">
                                 Levlstore
                              </Link>
                           </li>
                           <li>
                              <Link to="store">
                                 Purchase programs
                              </Link>
                           </li>
                           <li>
                              <Link to="store">
                                 newsletter
                              </Link>
                           </li>
                        </ul>
                     </Col>
                     <div className="hr"></div>
                  </Row>
                  <Row className="footer-mediaNav">
                     <Col >
                        <div className="img-wrapper">
                           <Link to="/">
                              <Image src={facebookIcon} fluid/>
                           </Link>
                        </div>
                     </Col>
                     <Col>
                        <div className="img-wrapper">
                           <Link to="/">
                              <Image src={instagramIcon} fluid/>
                           </Link>
                        </div>
                     </Col>
                     <Col>
                        <div className="img-wrapper">
                           <Link to="/">
                              <Image src={twitterIcon} fluid/>
                           </Link>
                        </div>
                     </Col>
                     <Col>
                        <div className="img-wrapper">
                           <Link to="/">
                              <Image src={githubIcon} fluid/>
                           </Link>
                        </div>
                     </Col>
                  </Row>
                  <span>©2021 Level. All rights reserved</span>
               </div>
            </Container>
         </footer>
      </>
   )
}

export default Footer
