import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-2">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          🎉 EventZen
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link fw-semibold" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link fw-semibold" to="/events">Events</Link></li>
            <li className="nav-item"><Link className="nav-link fw-semibold" to="/venues">Venues</Link></li>
            <li className="nav-item"><Link className="nav-link fw-semibold" to="/contact">Contact</Link></li>

            {/* Login and Signup Links with Styling */}
            <li className="nav-item ms-3">
              <Link className="nav-link btn btn-outline-light px-3 py-1 fw-bold" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link className="nav-link btn btn-light text-primary px-3 py-1 fw-bold" to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
