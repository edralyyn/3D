import React from 'react';
import './cssfiles/VerticalNavbar.css';
import Vertical3DBoxes from './Vertical3DBoxes';
const VerticalNavbar = () => {
  return (
    <div style={{backgroundColor: "pink", display:"inline-block", height: "789px", width: "300px"}}>
    <div className="container"> {/* Parent container for vertical text and navbar */}
      {/* Add vertical text to the left side */}
      <div className="vertical-text">PC Parts</div>

      {/* Vertical Navbar */}
      <div className="vertical-navbar">
        <button className="arrow-btn up-arrow">↑</button>
        <div className="object-placeholder">
          
          <Vertical3DBoxes/>
        </div>
        <button className="arrow-btn down-arrow">↓</button>
      </div>
    </div>
    </div>
  );
};

export default VerticalNavbar;
