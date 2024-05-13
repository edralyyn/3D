import React, { useState } from 'react';
import './cssfiles/HealthSection.css';

const HealthSection = () => {
  // Create a state variable for health level (0 to 100)
  const [health, setHealth] = useState(20); // Set initial health level as 75 (as an example)

  return (
    <div className="health-section">
      <div className="health-header">
        <h3>Health</h3>
        <p>192.168.76.1: Health {health}%</p>
      </div>
      {/* Health bar container */}
      <div className="health-bar-container">
        <div className="health-bar" style={{ width: `${health}%` }}>
          {/* Inner content of health bar can be added here */}
        </div>
      </div>
      {/* Add controls or other elements as needed */}
    </div>
  );
};

export default HealthSection;
