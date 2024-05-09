import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import VerticalNavbar from "./components/VerticalNavbar";
import ThreeDObject from './components/ThreeDObject';
import HealthSection from './components/HealthSection';
import SummaryButton from './components/SummaryButton';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <div>
        <Login setLoggedIn={setLoggedIn} />
        <Signup />
      </div>
    );
  }

  // If logged in, render the main application content
  return (
    <div>
      <Navbar />
      <VerticalNavbar />
      <ThreeDObject />
      <HealthSection />
      <SummaryButton />
    </div>
  );
};

export default App;
