import React from 'react';
import styled from 'styled-components';

const AboutPageContainer = styled.div`
  padding: 20px;
`;

const AboutPageTitle = styled.h2`
  font-size: 2em;
  color: #007bff;
`;

const AboutPageContent = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  margin-top: 15px;
`;

const AboutPage = () => {
  return (
    <AboutPageContainer>
      <AboutPageTitle>About Us</AboutPageTitle>
      <AboutPageContent>
        Our clinic is committed to providing high-quality medical care to our community.
        We have a team of dedicated doctors and nurses with years of experience in general practice.
        We strive to create a welcoming and supportive environment for all our patients.
      </AboutPageContent>
    </AboutPageContainer>
  );
};

export default AboutPage;