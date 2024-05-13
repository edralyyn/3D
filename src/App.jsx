import React, { useState } from 'react';
import Navbar from "./components/Navbar";

import ThreeDObject from './Renders/ThreeDObject';
import HealthSection from './components/HealthSection';
import SummaryButton from './components/SummaryButton';
import Login from './components/Login';
import Devices from './components/Devices';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <div>
        <Login setLoggedIn={setLoggedIn} />
      </div>
    );
  }

  // If logged in, render the main application content
  return (
    <div>
      <Navbar />
      <ThreeDObject />
      <Devices/>
      <HealthSection />
      <SummaryButton />
      
    </div>
  );
};

export default App;
