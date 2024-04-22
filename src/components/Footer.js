import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <footer>
      <nav>
        <ul>
          <li><a href="/privacy-policy">Privacy policy</a></li>
          <li><a href="/refund-policy">Refund policy</a></li>
          <li><a href="/website-policy">Website policy</a></li>
          <li><a href="/contact-us">Contact us</a></li>
          <li><Link to="/products/SE03">Produtcs</Link></li>
          <li><a href="/career">Career</a></li>
          <li><a href="/rentals">Rentals</a></li>
        </ul>
      </nav>
      {/* <div className="social-icons">
        <a href="instagram_link"><i className="fab fa-instagram"></i></a>
        <a href="linkedin_link"><i className="fab fa-linkedin"></i></a>
      </div> */}
    </footer>
    </>
  );
}

export default Footer;
