import React, { useState } from "react";
import { createVenue } from "../services/venueService";

function VenueForm({ onVenueAdded }) {
  const [venue, setVenue] = useState({ name: "", location: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await createVenue(venue);
      setMessage("✅ Venue Created Successfully!");
      setVenue({ name: "", location: "" }); // Reset form
      onVenueAdded(); // Refresh venue list
    } catch (error) {
      setMessage("❌ Error: " + (error.response?.data?.message || "Failed to create venue"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Venue Name"
          value={venue.name}
          onChange={(e) => setVenue({ ...venue, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={venue.location}
          onChange={(e) => setVenue({ ...venue, location: e.target.value })}
          required
        />
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Adding..." : "Add Venue"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default VenueForm;
