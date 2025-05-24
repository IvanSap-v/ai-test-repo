import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer, NavbarList, NavbarItem } from './Navbar.styles';  // Using styled components

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem>
          <Link to="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/about">About</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/services">Services</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/contact">Contact</Link>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;