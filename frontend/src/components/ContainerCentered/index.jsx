import React from 'react'
import {Container} from 'react-bootstrap'

// Local imports
import './ContainerCentered.css'

function ContainerCentered({children, title}) {
   return (
      <Container className="containerCentered">
         <div className="title">
            <h1>{title}</h1>
         </div>
         {children}
      </Container>
   )
}

export default ContainerCentered
