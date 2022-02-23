import React from 'react'
import BUBBA from '../assets/img/BUBBA.jpg';
import { StyledMain, StyledContainer, StyledText, HeroImage } from '../pages/Pages.styled';
import '../assets/style/hero.css';

const Hero = () => {
  return (
    <StyledMain>
      <HeroImage>
        <img className="imagess"src={BUBBA} alt="" />
      </HeroImage>
    <StyledContainer>
      
      <StyledText>
      <h3 className="h3Gradient">THE BOOK  OF</h3>
      <h2 className="h2Gradient">BOBA FETT</h2>
      <h5 className="h1Gradient">SHIPS OF THE GALAXY: NABOO N1 START FIGTHER</h5>
        <p className="parrafo">
          <b>Go Under the Hood of the classic of choice fir the Mandalorian. </b>
        </p>
        <div className="btn-div">
          <button className="buttonGet">READ MORE</button>
          <button className="buttonGet2">STREAM NOW</button>
        </div>
      </StyledText>
      
      </StyledContainer>
  </StyledMain>
  )
}

export default Hero