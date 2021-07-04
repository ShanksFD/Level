import React from 'react'
import { Container } from 'react-bootstrap'

// Local imports
import Hero from '../components/Hero'
import ContainerCentered from '../components/ContainerCentered'

function HomeScreen() {
   const homeStyle = {
      height: "100vh"
   }
   return (
      <Container style={homeStyle}>
         <Hero />
         <ContainerCentered title="WE'RE ALL GAMERS"></ContainerCentered>
      </Container>
   )
}

export default HomeScreen
