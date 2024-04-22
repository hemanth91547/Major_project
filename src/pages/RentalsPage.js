import React from 'react';
import './rentals.css';

function RentalsPage() {
  return (
    <div className="rentals-container">
      <h2>Explore the Roars of Rhyno with Our Rental Options!</h2>
      <p>Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno firsthand before committing. Simply visit our authorized dealerships to unlock this opportunity.</p>
      <p>Additionally, we're redefining campus commuting with our rental fleet tailored for college students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.</p>
      <div className="rental-app-buttons">
        <a href="https://play.google.com/store/apps/details?id=com.rhynorental" target="_blank" rel="noopener noreferrer">
          <button className="rental-app-button">
            <i className="fab fa-android"></i> Download on Android
          </button>
        </a>
        <a href="https://apps.apple.com/us/app/rhyno-rental/id1234567890" target="_blank" rel="noopener noreferrer">
          <button className="rental-app-button">
            <i className="fab fa-apple"></i> Download on Apple
          </button>
        </a>
      </div>
    </div>
  );
}

export default RentalsPage;
