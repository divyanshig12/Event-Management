import React, { useState, useEffect } from "react";
import { getVenues } from "../services/venueService";

const Venues = () => {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const data = await getVenues();
        console.log("📌 API Response:", data); // ✅ Check if data is received
        setVenues(data);
      } catch (error) {
        console.error("❌ Failed to load venues:", error);
      }
    };

    fetchVenues();
  }, []);

  return (
    <div>
      <h2>Venues</h2>
      {venues.length === 0 ? (
        <p>⚠ No venues available. Try adding one!</p>
      ) : (
        <ul>
          {venues.map((venue) => (
            <li key={venue.id}>{venue.name} - {venue.location}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Venues;
