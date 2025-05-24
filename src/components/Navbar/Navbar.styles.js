import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: #f0f0f0;
  padding: 10px 0;
`;

export const NavbarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

export const NavbarItem = styled.li`
  margin: 0 20px;

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;

    &:hover {
      color: #007bff;
    }
  }
`;