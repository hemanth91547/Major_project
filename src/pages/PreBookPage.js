 

import React from 'react';
import './prebook.css'

function PreBookPage() {
  return (
    <div className="prebook-container">
      <div className="product">
        <img src="/se03_lite_black.png" alt="SE03 Lite" />
        <div className="product-info">
          <h2>SE03 Lite</h2>
          <p>
            This Rhyno is an entry-level variant tailored with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno but is designed with a smaller battery and motor. Offering the same elegance, comfort, and style, this variant is tailored for those seeking an easy-on-the-pocket solution without sacrificing essential benefits. With an 80-100 km range on a single charge and a top speed of 55 km/h, the Rhyno SE03 Lite ensures effortless commuting. If you're in pursuit of thrills or frequently ride with a pillion, we recommend exploring our higher-power variants. Here are some technical details for the SE03 Lite that you might find valuable.
          </p>
          <button className="prebook-button">Pre-book</button>
        </div>
      </div>
      
      <div className="product">
        <img src="/red.png" alt="SE03" />
        <div className="product-info">
          <h2>SE03</h2>
          <p>
            Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!
          </p>
          <button className="prebook-button">Pre-book</button>
        </div>
      </div>
      
      <div className="product">
        <img src="/Copy of final design try 2 cross view.182.png" alt="SE03 Max" />
        <div className="product-info">
          <h2>SE03 Max</h2>
          <p>
            This Rhyno is tuned for long drives and no thrills. Like all other variants, this machine comes with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge. While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches.
          </p>
          <button className="prebook-button">Pre-book</button>
        </div>
      </div>
    </div>
  );
}

export default PreBookPage;
