import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer'; 

interface LayoutProps {
  children: ReactNode;  // This type allows any valid React child
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children} {/* This will render the routed content */}
      <Footer />
    </>
  );
};

export default Layout;
