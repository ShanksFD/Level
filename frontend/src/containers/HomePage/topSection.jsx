import React from 'react'
import styled from 'styled-components'
import {Image, Button } from 'react-bootstrap'


// local imports
import productImg from '../../assets/img/kraken-ult.png'
import Header from '../../components/header/Header'
import './topSection.css'

const TopSectionContainer = styled.div`
   width: 100%;
   height: 800px;
   // background-color: #ccc;
`;

const TopSectionWrapper = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   // background-color: pink;
`;

const TopSectionInnnerContainer = styled.div`
   width: 100%:
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   // background-color: BlueViolet;
`;

const StandoutImage = styled.div`
   width: 45em;

   img {
      width: 100%;
      height: 100%;
   }
   // background-color: magenta;
`;

const SloganContainer = styled.div`
   display: flex;
   flex-direction: column;
   // background-color: red;
`;

const SloganText = styled.h3`
   margin: 0;
   line-height: 1.4;
   font-weight: 900;
   font-size: 30px;
`;

const SloganButton = styled.div`
   margin: 0;

   button {
      margin-top: 30px;
      width: 14em;
      height: 3.5em;
      font-size: 1.2em; 
   }
`;

export function TopSection(props)
{
   return <TopSectionContainer>
      <Header/>
      <TopSectionWrapper>
          {/* Hero Container */}
         <TopSectionInnnerContainer className="content">
         {/* SLogan Container */}    
            <SloganContainer className="mainContent">
               <SloganText>Exclusive products <br/>& accessories</SloganText>
               <SloganButton>
                  <Button >SHOP NOW</Button>
               </SloganButton>
            </SloganContainer>

            {/* Product Image */}
            <StandoutImage>
               <Image src={productImg} alt="product_image"/>
            </StandoutImage>
         </TopSectionInnnerContainer>
      </TopSectionWrapper>
   </TopSectionContainer>
}  