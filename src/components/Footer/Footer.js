import React from 'react';
import { FooterContainer, FooterText } from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; {new Date().getFullYear()} General Doctor. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;