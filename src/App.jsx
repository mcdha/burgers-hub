// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Package from './pages/Package/Package';




const App = () => {
  return (
    <>
    
    <Routes basename="/">
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/package" element={<Package />} />
        </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
  </Routes>
    
    </>
  )
}

export default App
