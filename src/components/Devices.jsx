import React from 'react';
import './cssfiles/Devices.css'; // Import your CSS file for styling

const Devices = () => {
    return (
        <div className="devices-section">
            <div className="window">
                <div className="window-header">
                    <span className="title">Devices</span>
                    
                </div>
                <div className="window-content">
                    <h1>Device Collected: 3</h1>
                </div>
                <div className="window-header2">
                  <span className="title">Findings</span>
                </div>
                <div className="window-content">
                    <h1>2 out of 10 Devices have Errors</h1>
                </div>
            </div>
        </div>
    );
};

export default Devices;
