import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { LayoutContainer } from './Layout.styles'; //Styled Components

const Layout = ({ children }) => {
    return (
        <LayoutContainer>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </LayoutContainer>
    );
};

export default Layout;