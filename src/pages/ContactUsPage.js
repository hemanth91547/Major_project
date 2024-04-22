import React from 'react';
import './contact.css';

function ContactUsPage() {
  return (
    <div className="contact-us-container">
      <center>
      <h2>Contact Us</h2></center>
      <div className="contact-content">
        <div className="contact-info">
          <p><strong>Mail:</strong> info@rhyno.in</p>
          <p><strong>Mobile no.:</strong> +91-9023987528</p>
          <p><strong>Location:</strong> Rhyno Wheels Private Limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.</p>
        </div>
        <div className="contact-image">
          <img src='/pexels-olly-789822.jpg' alt="Contact Us" />
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
