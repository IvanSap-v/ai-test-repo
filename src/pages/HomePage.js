import React from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const HomePageTitle = styled.h1`
  font-size: 2.5em;
  color: #007bff;
`;

const HomePageDescription = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
  margin-top: 20px;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <HomePageTitle>Welcome to Our General Practice</HomePageTitle>
      <HomePageDescription>
        We provide comprehensive and compassionate healthcare for you and your family.
        Our experienced team is dedicated to your well-being. Schedule an appointment today!
      </HomePageDescription>
    </HomePageContainer>
  );
};

export default HomePage;