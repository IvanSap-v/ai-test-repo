import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background-color: #e9ecef;
  padding: 4rem 0;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #212529;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: #6c757d;
`;

function Hero({ title, subtitle }) {
  return (
    <HeroSection>
      <HeroTitle>{title}</HeroTitle>
      <HeroSubtitle>{subtitle}</HeroSubtitle>
    </HeroSection>
  );
}

export default Hero;
```

```