import React, { useEffect, useState } from "react";
import { getAllEvents, deleteEvent, updateEvent } from "../services/eventService";
import "./EventList.css";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [updatedEvent, setUpdatedEvent] = useState({ name: "", date: "", venueId: "" });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const data = await getAllEvents();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      await deleteEvent(id);
      fetchEvents();
    }
  };

  const handleEdit = (event) => {
    setEditingEvent(event.id);
    setUpdatedEvent({ name: event.name, date: event.date, venueId: event.venueId });
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (id) => {
    try {
      await updateEvent(id, updatedEvent);
      setEditingEvent(null);
      fetchEvents();
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  return (
    <div className="event-container">
      <h2>📅 Upcoming Events</h2>
      {events.length === 0 ? (
        <p className="no-events">No events found.</p>
      ) : (
        <div className="event-list-scroll">
          <table className="event-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Venue ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  {editingEvent === event.id ? (
                    <>
                      <td>{event.id}</td>
                      <td>
                        <input type="text" name="name" value={updatedEvent.name} onChange={handleUpdateChange} />
                      </td>
                      <td>
                        <input type="date" name="date" value={updatedEvent.date} onChange={handleUpdateChange} />
                      </td>
                      <td>
                        <input type="number" name="venueId" value={updatedEvent.venueId} onChange={handleUpdateChange} />
                      </td>
                      <td>
                        <button className="save-btn" onClick={() => handleUpdateSubmit(event.id)}>💾 Save</button>
                        <button className="cancel-btn" onClick={() => setEditingEvent(null)}>❌ Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{event.id}</td>
                      <td>{event.name}</td>
                      <td>{new Date(event.date).toLocaleDateString()}</td>
                      <td>{event.venueId}</td>
                      <td>
                        <button className="edit-btn" onClick={() => handleEdit(event)}>✏ Edit</button>
                        <button className="delete-btn" onClick={() => handleDelete(event.id)}>🗑 Delete</button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EventList;
