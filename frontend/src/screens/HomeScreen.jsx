import React from 'react'
import { Container } from 'react-bootstrap'

// Local imports
import Hero from '../components/Hero'
import ContainerCentered from '../components/ContainerCentered'

function HomeScreen() {
   return (
      <Container>
         <Hero />
         <ContainerCentered title="WE'RE ALL GAMERS"></ContainerCentered>
      </Container>
   )
}

export default HomeScreen
