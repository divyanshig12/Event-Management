import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Event Management</h1>
      <img 
        src="/event-management-concept-meeting-white-office-table-93231489.webp" 
        alt="Event Management"
        className="home-image"
      />
      <Link to="/events" className="explore-events-button">Explore Events</Link>
    </div>
  );
};

export default Home;
