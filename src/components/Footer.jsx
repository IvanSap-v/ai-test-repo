import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #343a40;
  color: white;
  text-align: center;
  padding: 1rem 0;
  position:relative;
  bottom:0;
  width:100%;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Dr. [Your Name]. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;
```

```