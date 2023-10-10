import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'aos/dist/aos.css'; // Import the AOS CSS
import AOS from 'aos'; // Import AOS
import './Navbar.css';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    AOS.init(); // Initialize AOS

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
     <nav className={`navbar navbar-expand-lg ${isSticky ? 'sticky' : ''}`} data-aos="fade-down" data-aos-duration="10000">
        
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="public/logo/logo.png"
                height="50"
                alt="Burger Logo"
                loading="lazy"
              />
            </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  
                  to="/home"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  
                  to="/about"
                >
                  About us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                 
                  to="/packages"
                >
                  Packages
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                 
                  to="/contact"
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <a className="link-secondary me-4" href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>
            <button className='btn btn-rounded btn-nav'>
              Book Now &nbsp;<i className="fas fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
