import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./EventList.css";

const API_URL = "http://localhost:5454/api/events";

function Events({ refresh }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch events from API
  const fetchEvents = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(API_URL);
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
      setError("❌ Failed to load events. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [refresh]); // Reload when refresh state changes

  // Delete an event
  const handleDelete = async (id) => {
    if (!window.confirm("🛑 Are you sure you want to delete this event?")) return;

    try {
      await axios.delete(`${API_URL}/${id}`);
      setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("❌ Failed to delete event. Please try again.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">📅 Upcoming Events</h2>
      <Link to="/events/new" className="btn btn-success mb-3">➕ Create Event</Link>
      <Link to="/chatbot" className="btn btn-info mb-3 mx-2">💬 Chatbot</Link>

      {/* Loading & Error Handling */}
      {loading && <p className="text-info">⏳ Loading events...</p>}
      {error && <p className="text-danger">{error}</p>}

      {/* Event List */}
      {!loading && events.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Venue</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td>{event.id}</td>
                  <td>{event.name}</td>
                  <td>{new Date(event.date).toLocaleDateString()}</td>
                  <td>{event.venue?.id || "N/A"}</td>
                  <td>
                    <Link to={`/events/edit/${event.id}`} className="btn btn-warning btn-sm mx-2">✏ Edit</Link>
                    <button onClick={() => handleDelete(event.id)} className="btn btn-danger btn-sm">🗑 Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading && <p className="text-muted">🚫 No events available.</p>
      )}
    </div>
  );
}

export default Events;
