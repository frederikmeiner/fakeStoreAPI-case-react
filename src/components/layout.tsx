import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer'; 

interface LayoutProps {
  children: ReactNode;
}
//children is a special prop that represents content inside Layout
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
