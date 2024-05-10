import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import VerticalNavbar from "./components/VerticalNavbar";
import ThreeDObject from './Renders/ThreeDObject';
import HealthSection from './components/HealthSection';
import SummaryButton from './components/SummaryButton';
import Login from './components/Login';
import Functions from './components/Functions';

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
    </div>
  );
};

export default App;
