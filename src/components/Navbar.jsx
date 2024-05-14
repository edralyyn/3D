import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Navbar({ setLoggedIn }) {
  const [numDays, setNumDays] = useState('');

  const handleLogout = () => {
    // Clear user session logic
    if (typeof setLoggedIn === 'function') {
      setLoggedIn(false); // Update loggedIn state in parent component to false
      console.log('User logged out');
    } else {
      console.error('setLoggedIn is not a function');
    }
  };

  const handleRunScript = () => {
    fetch('http://localhost:5000/runscript', {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => {
        // Update the script output in HealthSection
        document.dispatchEvent(new CustomEvent('scriptOutput', { detail: data.output }));
      })
      .catch(error => console.error('Failed to run script:', error));
  };

  const handlePredict = () => {
    fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ numDays: numDays }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Prediction Output:', data.output); // Log the prediction output to the console
        document.dispatchEvent(new CustomEvent('predictionOutput', { detail: data.output }));
      })
      .catch(error => {
        console.error('Failed to run prediction:', error);
      });
  };  
  
  return (
    <nav className="navbar bg-black">
      <div className="container-fluid">
        <form className="d-flex m-3 ms-0" role="search" onSubmit={(e) => {
          e.preventDefault();
          handlePredict();
        }}>
          <input
            className="form-control me-2"
            type="text"
            placeholder="Number of Days"
            aria-label="Search"
            value={numDays}
            onChange={(e) => setNumDays(e.target.value)}
          />
          <button className="btn btn-sm btn-primary" type="submit">
            Forecast
          </button>
        </form>
        <h1 style={{color: 'white', fontSize: 30, fontFamily:"Courier",  borderLeft: '2px solid white', padding: '10p',
          borderBottom: '2px solid white', borderTopLeftRadius: 10, borderBottomRightRadius: 10
        }}>P r i M a</h1>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-warning me-md-2" type="button" onClick={handleRunScript}>
            Collect
          </button>
          <button className="btn btn-primary me-md-2" type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
