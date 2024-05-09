import React from 'react';
import './cssfiles/Navbar.css';

const Navbar = () => {
  return (
    <div style={{backgroundColor:"red", paddingBottom: "20px"}}>
     
      <div className="pctext">
        <h1>PC selector</h1>
      </div>
      <div className="navbar">
     
      <button className="arrow-btn left-arrow">←</button>
      <div className="text-placeholder">PC Number</div>
      <button className="arrow-btn right-arrow">→</button>
      </div>
    </div>
  );
};

export default Navbar;
