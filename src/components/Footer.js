import React from "react";
import styled from "styled-components";
import img from '../assets/img/VaderFooter.jpeg';

//FooterViews
const FooterViews = styled.div`
  bottom: 0;
  height: 10.5vw;
  width: 100vw;
  border-radius: 2px;
  margin-right: 50%;
  background-image: url(${img} );
  background-repeat: no-repeat;
  background-position: 27em 0.1cm;
  margin-top:3.5%;
  
`;

const FooterSocialButton = styled.div`
text-align: center;
`;

const FooterIconSocial = styled.a`
display: inline-block;
position: relative;
cursor: pointer;
width: 3.125rem;
height: 3.125rem;
border: 0.125rem solid transparent;
padding: 0;
text-decoration: none;
text-align: center;
color: white;
font-size: 1.5625rem;
font-weight: normal;
line-height: 2em;
border-radius: 1.6875rem;
transition: all 0.5s ease;
margin-right: 0.25rem;
margin-bottom: 0.25rem;
`;

const FooterBottom =styled.div`
position: relative;
z-index: 2;
text-align: center;
padding: 10px 10px;
/*margin-right: 70%;*/
`;

const FooterA = styled.a`
  color: rgb(51 47 124);
  font-weight: 600;
  text-decoration: none;
  text-transform: lowercase;
`;

const Footer = ({ creationDate }) => {
  return (
    <FooterViews>
      
       <FooterSocialButton>
          <FooterIconSocial href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></FooterIconSocial>
          <FooterIconSocial href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></FooterIconSocial>
          <FooterIconSocial href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></FooterIconSocial>
          <FooterIconSocial href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></FooterIconSocial>
          <FooterIconSocial href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></FooterIconSocial>
        </FooterSocialButton>
      <FooterBottom>
      <span>TMFAKE & © Lucasfilm Ltd. All Rights Reserved <FooterA href="https://github.com/belcar-ceci">belcar-ceci</FooterA>
      &copy; {creationDate} </span>
      </FooterBottom>
      
      
    </FooterViews>
  );
};

export default Footer;
