import React from 'react';
import './home.css';

function HomePage() {
  return (
    <div className="home-container">
      <section className="front-line">
        <h1>Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets Style. Elegance</h1>
      </section>

      <section className="vehicle-photos">
        <img src="/Copy of final design try 2 cross view.168.png" alt="Vehicle 1" />
        <img src="/Copy of final design try 2 cross view.182.png" alt="Vehicle 2" />
        <img src="/final design try 2 cross view.178.png" alt="Vehicle 3" />
      </section>

      <section className="product-checkout">
        <button>Checkout Product 1</button>
        <button>Checkout Product 2</button>
        <button>Checkout Product 3</button>
      </section>

      <section className="usp-carousel">
        <div className="usp-slide">
          <h2>LFP Battery</h2>
          <p>Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances Rhyno's longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance. Each battery undergoes rigorous waterproofing tests according to IP76 standards. But it doesn't stop there—our technology goes the extra mile in ensuring the battery's lasting durability. Connect with us to discover the thoughtful engineering behind our batteries!</p>
        </div>
        <div className="usp-slide">
          <h2>Wider tyres</h2>
          <p>Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand.</p>
        </div>
        <div className="usp-slide">
          <h2>Range prediction</h2>
          <p>Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind, thanks to the scooter providing precise information about the remaining battery.</p>
        </div>
        <div className="usp-slide">
          <h2>Extraordinary Experience</h2>
          <p>Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity!</p>
        </div>
        <div className="usp-slide">
          <h2>Rugged and simple Design</h2>
          <p>We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, ending up spending weeks and months at service stations for complex repairs. We took a bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it. If you have reached this far, why not to take a test ride? Click here to locate your nearest dealership or book a test ride at your home!</p>
        </div>
      </section>

      <section className="pre-book-button">
        <button>Pre-book Now</button>
      </section>
    </div>
  );
}

export default HomePage;
