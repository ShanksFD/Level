import React, {Fragment, useEffect} from 'react'
import { Container} from 'react-bootstrap'
import { useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'

// Local imports
import "./MiceScreen.css"
import { toggleNav } from "../../actions/navActions";

function MiceScreen({location}) {
   const history = useHistory()
   const dispatch = useDispatch()

   useEffect(()=>{
      dispatch(toggleNav())

      // FIXME: HARD CODED VALUE
      var historyListener = history.listen((location) => { 
         if(location.pathname !== "/mice")
            dispatch(toggleNav())
            
         historyListener()
      }) 
   }, [dispatch, history])

   return (
      <Fragment>
          <div className="miceSC">
            <div className="nav-show">
            </div>
         
            <Container>

            </Container>
         </div>
      </Fragment>
   )
}

export default MiceScreen
