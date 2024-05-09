import React, { useState } from 'react';
import './cssfiles/SummaryButton.css'; // Import the CSS file for styling

const SummaryButton = () => {
  // State variable to control the visibility of the popup
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Function to toggle the popup visibility
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div>
      {/* Summary button */}
      <button className="summary-btn" onClick={togglePopup}>
        Summary
      </button>

      {/* Conditionally render the popup if isPopupVisible is true */}
      {isPopupVisible && (
        <div className="popup-window">
          <div className="popup-content">
            {/* Placeholder text */}
            Placeholder text for the popup window
            {/* Add a button to close the popup */}
            <button className="close-btn" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SummaryButton;
