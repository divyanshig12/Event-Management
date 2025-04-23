import React, { useState } from "react";
import "./VenueList.css"; // Import the new CSS file

const VenueList = () => {
  const [venues, setVenues] = useState([
    { id: 1, name: "Conference Hall", location: "New York" },
    { id: 2, name: "Grand Hall", location: "Downtown City" }
  ]);

  const [newVenue, setNewVenue] = useState({ name: "", location: "" });

  const handleAdd = () => {
    if (!newVenue.name || !newVenue.location) return;
    const newEntry = { id: venues.length + 1, ...newVenue };
    setVenues([...venues, newEntry]);
    setNewVenue({ name: "", location: "" });
  };

  const handleDelete = (id) => {
    setVenues(venues.filter((venue) => venue.id !== id));
  };

  return (
    <div className="container">
      <h2>🏛 Venues</h2>

      {/* Venue Form */}
      <div className="venue-form">
        <input
          type="text"
          placeholder="Venue Name"
          value={newVenue.name}
          onChange={(e) => setNewVenue({ ...newVenue, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={newVenue.location}
          onChange={(e) => setNewVenue({ ...newVenue, location: e.target.value })}
        />
        <button onClick={handleAdd} className="btn btn-primary">➕ Add Venue</button>
      </div>

      {/* Table Wrapper for Scroll */}
      <div className="table-container">
        <table className="venue-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {venues.map((venue) => (
              <tr key={venue.id}>
                <td>{venue.id}</td>
                <td>{venue.name}</td>
                <td>{venue.location}</td>
                <td>
                  <button onClick={() => handleDelete(venue.id)} className="btn btn-danger">🗑 Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VenueList;
