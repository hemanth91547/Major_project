// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header>
      <nav>

      <Link to="/">
          <img src='/Copy of Logo with imagine initiate inspire.png' alt="Rhyno Logo" className="logo" />
        </Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li className="dropdown">
            <span>Products</span>
            <div className="dropdown-content">
              <Link to="/products/SE03Lite">SE03 Lite</Link>
              <Link to="/products/SE03">SE03</Link>
              <Link to="/products/SE03Max">SE03 Max</Link>
              <Link to="/compare">Compare all</Link>
            </div>
          </li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/pre-book">Pre-book now</Link></li>
        </ul>
        <div className="social-icons">
          <a href="instagram_link"><i className="fab fa-instagram"></i></a>
          <a href="linkedin_link"><i className="fab fa-linkedin"></i></a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
