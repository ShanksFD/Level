import React from 'react'
import {Figure} from "react-bootstrap"

function ProductFigure({children, image}) {
   return (
      <>
         <Figure>
            <Figure.Image
               alt="171x180"
               src={image}
            />
            <Figure.Caption>
               {children}
            </Figure.Caption>
      </Figure>
      </>
   )
}

export default ProductFigure
