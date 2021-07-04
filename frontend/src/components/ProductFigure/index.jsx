// import React from 'react'
import {Figure} from "react-bootstrap"

// Local imports
import './ProductFigure.css'

function ProductFigure({children, image, alt}) {
   return (
      <>
         <Figure>
            <Figure.Image
               alt={alt}
               src={image}
               className="w-100"
            />
            <Figure.Caption>
               {children}
            </Figure.Caption>
      </Figure>
      </>
   )
}

export default ProductFigure
