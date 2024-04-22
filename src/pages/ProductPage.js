import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './product.css';

function ProductPage() {
  const { productId } = useParams();
  const [selectedColor, setSelectedColor] = useState('red');

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const productInfo = {
    SE03Lite: {
      name: "SE03 Lite",
      image: `/se03_lite_${selectedColor}.png`,
      description: "This Rhyno is an entry-level variant tailored with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno but is designed with a smaller battery and motor. Offering the same elegance, comfort, and style, this variant is tailored for those seeking an easy-on-the-pocket solution without sacrificing essential benefits. With an 80-100 km range on a single charge and a top speed of 55 km/h, the Rhyno SE03 Lite ensures effortless commuting. If you're in pursuit of thrills or frequently ride with a pillion, we recommend exploring our higher-power variants.",
      specifications: [
        { label: "Battery", value: "1.8Kwh" },
        { label: "Battery features", value: "LFP with 1500 cycles, Active Balancing, Waterproof (IP67)" },
        { label: "Battery warranty", value: "3 years" },
        { label: "Charging time", value: "3 hours (12A)" },
        { label: "Motor", value: "Max speed 1500W" },
        { label: "Warranty on electronics", value: "1 year" },
        { label: "Max range (@30km/h)", value: "100 km" },
        { label: "Max range (@45km/h)", value: "90 km" },
        { label: "Max range (@full speed)", value: "70 km" },
        { label: "Other key benefits", value: "Fire-safe Battery, Range prediction, Comfortable ride, Stable and safe" }
      ]
    },
    SE03: {
      name: "SE03",
      image: `/se03_lite_${selectedColor}.png`,
      description: "Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!",
      specifications: [
        { label: "Battery", value: "2.7Kwh" },
        { label: "Battery features", value: "LFP with 1500 cycles, Active Balancing, Waterproof (IP67)" },
        { label: "Battery warranty", value: "3 Years" },
        { label: "Charging time", value: "4 hours (12A)" },
        { label: "Motor", value: "1500W" },
        { label: "Max speed", value: "55 km/h" },
        { label: "Warranty on electronics", value: "1 year" },
        { label: "Max range (@30km/h)", value: "150 km" },
        { label: "Max range (@45km/h)", value: "110 km" },
        { label: "Max range (@full speed)", value: "90 km" },
        { label: "Other key benefits", value: "Fire-safe battery, Range prediction, Comfortable ride, Stable and safe" }
      ]
    },
    SE03Max: {
      name: "SE03 Max",
      image: `/se03_lite_${selectedColor}.png`,
      description: "This Rhyno is tuned for long drives and no thrills. Like all other variants, this machine comes with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge. While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches.",
      specifications: [
        { label: "Battery", value: "2.7Kwh" },
        { label: "Battery features", value: "LFP with 1500 cycles, Active Balancing, Waterproof (IP67)" },
        { label: "Battery warranty", value: "3 Years" },
        { label: "Charging time", value: "4 hours (12A)" },
        { label: "Motor", value: "2000W" },
        { label: "Max speed", value: "65 km/h" },
        { label: "Warranty on electronics", value: "1 year" },
        { label: "Max range (@30km/h)", value: "120 km" },
        { label: "Max range (@45km/h)", value: "100 km" },
        { label: "Max range (@full speed)", value: "80 km" },
        { label: "Other key benefits", value: "Fire-safe battery, Range prediction, Comfortable ride, Stable and safe" }
      ]
    }
  };

  const product = productInfo[productId];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={product.image} alt={`${product.name} - ${selectedColor}`} />
      </div>
      <div className="color-selection">
        <h3>Select Color:</h3>
        <div className="color-buttons">
          <button className="color-button" onClick={() => handleColorSelection('red')}>Red</button>
          <button className="color-button" onClick={() => handleColorSelection('blue')}>Blue</button>
          <button className="color-button" onClick={() => handleColorSelection('black')}>Black</button>
        </div>
         
      </div>
      <div className="product-info">
        <h2>Rhyno {product.name}</h2>
        <p>{product.description}</p>
        <h3>Specification: Rhyno {product.name}</h3>
        <table>
          <tbody>
            {product.specifications.map(spec => (
              <tr key={spec.label}>
                <td><strong>{spec.label}:</strong></td>
                <td>{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="buy-now-button">Buy Now</button>
    </div>
  );
}

export default ProductPage;
