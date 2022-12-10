import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <main>
        {children}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;