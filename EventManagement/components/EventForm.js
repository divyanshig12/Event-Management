import React, { useState } from "react";
import { createEvent } from "../services/eventService";
import "./EventForm.css"; // Import the CSS file

const EventForm = ({ onEventAdded }) => {
  const [event, setEvent] = useState({ name: "", date: "", venueId: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Validate fields
    if (!event.name.trim()) {
      setMessage("❌ Please enter an Event Name.");
      setLoading(false);
      return;
    }

    if (!event.date) {
      setMessage("❌ Please select a Date.");
      setLoading(false);
      return;
    }

    if (!event.venueId || isNaN(event.venueId)) {
      setMessage("❌ Please enter a valid Venue ID.");
      setLoading(false);
      return;
    }

    try {
      await createEvent({
        name: event.name,
        date: event.date,
        venue: { id: parseInt(event.venueId, 10) },
      });

      setMessage("✅ Event added successfully!");
      onEventAdded(); // Refresh event list
      setEvent({ name: "", date: "", venueId: "" });
    } catch (error) {
      setMessage(`❌ Failed to add event. ${error.response?.data || "Server error"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="event-form-container">
      <h2>Add Event</h2>

      {message && (
        <p className={`message ${message.includes("❌") ? "error" : "success"}`}>
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="event-form">
        <input type="text" name="name" placeholder="🎉 Event Name" value={event.name} onChange={handleChange} required />
        <input type="date" name="date" value={event.date} onChange={handleChange} required />
        <input type="number" name="venueId" placeholder="📍 Enter Venue ID" value={event.venueId} onChange={handleChange} required />

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "➕ Add Event"}
        </button>
      </form>
    </div>
  );
};

export default EventForm;
