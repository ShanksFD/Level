import React from 'react'
import {Container} from 'react-bootstrap'

// Local imports
import './ContainerCentered.css'

function ContainerCentered({children, title}) {
   return (
      <Container className="containerCentered">
         <h1>{title}</h1>
      </Container>
   )
}

export default ContainerCentered
