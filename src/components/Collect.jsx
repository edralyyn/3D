// Collect.js
import React from 'react';

const Collect = ({ output }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Collect Output</h2>
          {/* Display the output */}
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
};

export default Collect;
