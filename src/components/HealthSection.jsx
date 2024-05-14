import React, { useState, useEffect } from 'react';
import './cssfiles/HealthSection.css';

const HealthSection = () => {
  const [health, setHealth] = useState(20);
  const [scriptOutput, setScriptOutput] = useState('');

  useEffect(() => {
    const updateScriptOutput = (event) => {
      setScriptOutput(event.detail);
    };

    document.addEventListener('scriptOutput', updateScriptOutput);

    return () => {
      document.removeEventListener('scriptOutput', updateScriptOutput);
    };
  }, []); // Ensure the dependency array is provided

  return (
    <div className="health-section">
      <div className="health-header">
        <h3>Health</h3>
        <ul className="health-info">
          <li>192.168.76.1:</li>
          <li>Health {health}%</li>
        </ul>
      </div>
      <div className="health-bar-container">
        <div className="health-bar" style={{ width: `${health}%` }}>
          {/* Inner content of health bar can be added here */}
        </div>
      </div>
      <div>
        {scriptOutput && <pre>{scriptOutput}</pre>}
      </div>
    </div>
  );
};

export default HealthSection;