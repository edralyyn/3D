import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Collect from './components/Collect';
import ThreeDObject from './Renders/ThreeDObject';
import HealthSection from './components/HealthSection';
import SummaryButton from './components/SummaryButton';
import Login from './components/Login';
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
      <HealthSection />
      <SummaryButton />
      <Collect/>
    </div>
  );
};

export default App;
