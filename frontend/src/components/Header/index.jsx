import React, {useState, useEffect} from "react";
import { Nav, Navbar, Container, Image, Form, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// Local imports
import './Header.css'
import { LG_SIZE } from "../../constants/sizeConstants";
import searchOutlineSvg from '../../assets/img/icons/search-outline.svg'
import heartOutlineSvg from '../../assets/img/icons/heart-outline.svg'
import avatarOutlineSvg from '../../assets/img/icons/avatar-outline.svg'
import cartOutlineSvg from '../../assets/img/icons/cart-outline.svg'
import {logout} from "../../actions/userActions"
import {clearCartItems} from "../../actions/cartActions"

function Header() {
   const [mobileNav, setMobileNav] = useState(false);
   const [search, setSearch] = useState(false)
   const navType = useSelector(state => state.navType)
   const {userInfo} = useSelector(state => state.userLogin)
   const showMobileNav = () => {
      if(window.innerWidth < LG_SIZE)
         setMobileNav(true)
      else
         setMobileNav(false)
   }

   useEffect(() => {
      showMobileNav();
      
   }, [navType])

   const dispatch = useDispatch()

   const logoutHandler = () => {
      dispatch(clearCartItems())
      dispatch(logout())
   }

   // Add a listener to resize keyEvent 
   // Toggle showMobileNav when the window reachs Medium size or bellow
   window.addEventListener('resize', showMobileNav)
   
   return (
      <>
         <header>
            <div className="top-header">
               <Nav className="d-flex container justify-content-end">
                  {userInfo ?
                  <>
                     <LinkContainer to="/profile"><Nav.Link>MY ACCOUNT</Nav.Link></LinkContainer>.
                     <LinkContainer to="/" onClick={logoutHandler}><Nav.Link>LOG OUT</Nav.Link></LinkContainer>
                  </> :
                  <>
                     <LinkContainer to="/login"><Nav.Link>LOG IN</Nav.Link></LinkContainer>.
                     <LinkContainer to="/register"><Nav.Link>CREATE ACCOUNT</Nav.Link></LinkContainer>
                  </>}
               </Nav>
            </div>
            <Navbar expand="lg" collapseOnSelect style={navType ? {backgroundColor: navType.color} : {backgroundColor: "transparent" }}>
               {navType && true}
               <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                     <i className="fa fa-bars" style={{fontSize: "1.5rem", color: "black"}}></i>
                  </Navbar.Toggle>
                  
                  <LinkContainer to="/" >
                     <Navbar.Brand>Level.</Navbar.Brand>
                  </LinkContainer>

                  {/* Show favorites and cart in mobile screen before navbar */}
                  {mobileNav && (
                     <>
                     <Nav className="flex-row right-snav">
                        <LinkContainer to="/cart">
                           <Nav.Link><Image src={cartOutlineSvg} alt="cart-outline" className="nav-icon" /></Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/saved">
                        <Nav.Link><Image src={heartOutlineSvg} alt="heart-outline" className="nav-icon" /></Nav.Link>
                        </LinkContainer>
                     </Nav>
                     </>)
                  }


                  <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="mx-auto">
                           <NavDropdown title="PRODUCTS" id="basic-nav-dropdown">
                              <LinkContainer to="/mice">
                                 <NavDropdown.Item>Mice</NavDropdown.Item>
                              </LinkContainer>

                              <LinkContainer to="/keyboards">
                                 <NavDropdown.Item>Keyboards</NavDropdown.Item>
                              </LinkContainer>

                              <LinkContainer to="/headsets">
                                 <NavDropdown.Item>Headsets</NavDropdown.Item>
                              </LinkContainer>
                           </NavDropdown>
                        <LinkContainer to="/about-us">
                           <Nav.Link>ABOUTS US</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/contact-us">
                           <Nav.Link>CONTACT US</Nav.Link>
                        </LinkContainer>

                        {/* Show Profile and search button when the mobile menu is toggled */}
                        {mobileNav && (
                           <>
                           <LinkContainer to="/contacts">
                           <Nav.Link>PROFILE</Nav.Link>
                           </LinkContainer>

                           <Nav.Link>
                              <Form>
                                 <Form.Group controlId="formGroupEmail">
                                    <Form.Control type="text" placeholder="SEARCH..." />
                                 </Form.Group>
                              </Form>
                           </Nav.Link>
                           </>)
                        }
                     </Nav>
                     </Navbar.Collapse>


                  {/* Hide nav elements in xs sm md screens */}
                  <Nav className="px-4 d-none d-sm-none d-md-none d-lg-flex d-lg-flex">
                     <Nav.Link onClick={() => {
                        setSearch(!search)
                     }}>
                        <Image src={searchOutlineSvg} alt="search-outline" className="nav-icon" />
                     </Nav.Link>

                     <LinkContainer to="/saved">
                        <Nav.Link><Image src={heartOutlineSvg} alt="heart-outline" className="nav-icon" /></Nav.Link>
                     </LinkContainer>

                     <LinkContainer to="/profile">
                        <Nav.Link><Image src={avatarOutlineSvg} alt="avatar-outline" className="nav-icon" /></Nav.Link>
                     </LinkContainer>

                     <LinkContainer to="/cart">
                        <Nav.Link><Image src={cartOutlineSvg} alt="cart-outline" className="nav-icon" /></Nav.Link>
                     </LinkContainer>
                  </Nav>
                  <div id="myOverlay" className="overlay" style={{display: search ? "block" : "none"}} onClick={(e) => {
                     if(e.target.id === "myOverlay")
                        setSearch(!search)
                  }}>
                     <div className="overlay-content">
                        <form action="action_page.php">
                           <input type="text" placeholder="SEARCH" name="search"/>
                           <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                     </div>
                  </div>
               </Container>
            </Navbar>
         </header>
      </>
   );
}

export default Header;
