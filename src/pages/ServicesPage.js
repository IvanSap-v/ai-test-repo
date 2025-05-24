import React from 'react';
import styled from 'styled-components';

const ServicesPageContainer = styled.div`
  padding: 20px;
`;

const ServicesPageTitle = styled.h2`
  font-size: 2em;
  color: #007bff;
`;

const ServicesList = styled.ul`
  list-style: disc;
  margin-left: 30px;
  margin-top: 15px;
`;

const ServicesListItem = styled.li`
  font-size: 1.1em;
  line-height: 1.4;
  margin-bottom: 8px;
`;

const ServicesPage = () => {
  return (
    <ServicesPageContainer>
      <ServicesPageTitle>Our Services</ServicesPageTitle>
      <ServicesList>
        <ServicesListItem>General check-ups</ServicesListItem>
        <ServicesListItem>Vaccinations</ServicesListItem>
        <ServicesListItem>Chronic disease management</ServicesListItem>
        <ServicesListItem>Minor surgical procedures</ServicesListItem>
        <ServicesListItem>Preventative care</ServicesListItem>
      </ServicesList>
    </ServicesPageContainer>
  );
};

export default ServicesPage;