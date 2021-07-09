import React from 'react'
import { Image, Container } from 'react-bootstrap'

// Local Imports
import "./AboutScreen.css"
import aboutBackground from "../../assets/img/about_background.jpg"
import profileSvg from "../../assets/img/profile.svg"
import Profile from '../../components/Profile'

function AboutScreen() {
   return (
      // background: url(images/bg.jpg) no-repeat center center fixed;
      <div className="about">
         <Image src={aboutBackground} fluid/>
         <Container>
            <div className="about-text">
               <h1 className="py-4">OUR STORY</h1>
               <p>
                  A Swiss company focused on innovation and quality, Logitech designs products and experiences that have an everyday place 
                  in people's lives. Founded in 1981 in Lausanne, Switzerland, and quickly expanding to the Silicon Valley, Logitech started 
                  connecting people through innovative computer peripherals and many industry firsts, including the infrared cordless mouse, 
                  the thumb-operated trackball, the laser mouse, and more.
                  Since those early days, we have expanded both our expertise in product design and our global reach. For each of our products, 
                  we focus on 
                  how our customers connect and interact with the digital world. We keep design at the center of everything we create, in every 
                  team and every 
                  discipline, to create truly unique and meaningful experiences.
                  With products sold in almost every country in the world, Logitech has developed into a multi-brand company designing products 
                  that bring people t
                  ogether through music, gaming, video and computing. Brands of Logitech include Logitech, Logitech G, ASTRO Gaming, Ultimate Ears, 
                  Jaybird, Blue 
                  Microphones, and Streamlabs.
               </p>
            </div>
            <div className="about-members">
               <h1 className="py-4">MEET OUR LEADERSHIP TEAM</h1>
               <div className="about-profile-wrapper">
                  <Profile image={profileSvg} name="Anass Soukrat" job="Frontend developer" />
                  <Profile image={profileSvg} name="Hamza Janate" job="Frontend developer" />
                  <Profile image={profileSvg} name="Ilyass Elharriri" job="Backend developer" />
                  <Profile image={profileSvg} name="Achraf Ounejma" job="Backend developer" />   
               </div>
            </div>
         </Container>
      </div>
   )
}

export default AboutScreen
