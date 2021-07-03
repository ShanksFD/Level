import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


function Footer() {
   return (
      <div>
         <footer>
            <Container>
               <Row>
                  <Col className="text-center">Copyright &copy; Level.</Col>
               </Row>
            </Container>
         </footer>
      </div>
   )
}

export default Footer
