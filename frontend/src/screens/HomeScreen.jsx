import React, {Fragment} from 'react'

// Local imports
import Hero from '../components/Hero'
import ContainerCentered from '../components/ContainerCentered'
import ProductFigure from '../components/ProductFigure'

// Images
import productSC1 from '../assets/img/product-sc-1.png'
import productSC2 from '../assets/img/product-sc-2.png'
import productSC3 from '../assets/img/product-sc-3.png'
import productSC4 from '../assets/img/product-sc-4.png'

function HomeScreen() {

   return (
      <Fragment>
         <Hero/>
         <ContainerCentered title="WE'RE ALL GAMERS">

            <ProductFigure image={productSC1}>
               <>
                  <h1 className="overlay-text">CONSOLES</h1>
               </>
            </ProductFigure>
         </ContainerCentered>
      </Fragment>
   )
}

export default HomeScreen
