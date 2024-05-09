import React, { useState } from 'react';
import './cssfiles/HealthSection.css';

const HealthSection = () => {
  // Create a state variable for health level (0 to 100)
  const [health, setHealth] = useState(75); // Set initial health level as 75 (as an example)

  return (
    <div className="health-section">
      <h3>Health</h3>
      {/* Health bar container */}
      <div className="health-bar-container">
        <div className="health-bar" style={{ width: `${health}%` }}>
          {/* Inner content of health bar can be added here */}
        </div>
      </div>
      <p>Health level: {health}%</p>
      {/* Add controls or other elements as needed */}
    </div>
  );
};

export default HealthSection;
