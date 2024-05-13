import React, { useState } from 'react';
import './cssfiles/HealthSection.css';

const HealthSection = () => {
  // Create a state variable for health level (0 to 100)
  const [health, setHealth] = useState(20); // Set initial health level as 20 (as an example)

  return (
    <div className="health-section">
      <div className="health-header">
        <h3>Health</h3>
        <ul className="health-info">
          <li>192.168.76.1:</li>
          <li>Health {health}%</li>
        </ul>
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
