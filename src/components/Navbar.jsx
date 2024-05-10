import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Navbar() {
  const handleLogout = () => {

  };

  return (
    <nav className="navbar bg-black rounded-bottom">
      <div className="container-fluid">
        <form className="d-flex m-3 ms-0" role="search">
          <input className="form-control me-2" type="form" placeholder="Number of Days" aria-label="Search" />
          <button className="btn btn-sm btn-primary" type="submit">Forecast</button>
        </form>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-warning me-md-2" type="button">Collect</button>
          <button className="btn btn-primary me-md-2" type="button">logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
