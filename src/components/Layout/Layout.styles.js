import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the layout takes up the full viewport height */

  main {
    flex: 1; /* Allow the main content to grow and fill remaining space */
  }
`;