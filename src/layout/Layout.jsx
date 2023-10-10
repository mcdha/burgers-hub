import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';


function Layout() {
  return (
    <>
      
             
              <Navbar />
              <div className='mt-5'><Outlet /></div>
              <Footer />
           
    </>
  );
}

export default Layout;
