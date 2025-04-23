import axios from "axios";

const API_URL = "http://localhost:5454/api/events";

export const getAllEvents = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("Fetched events:", response.data); // Debugging
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return []; // Return empty array to avoid frontend crashes
  }
};

export const createEvent = async (eventData) => {
  try {
    const response = await axios.post(API_URL, eventData);
    console.log("Event created:", response.data); // Debugging
    return response.data;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

export const updateEvent = async (id, eventData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, eventData);
    console.log("Event updated:", response.data); // Debugging
    return response.data;
  } catch (error) {
    console.error("Error updating event:", error);
    throw error;
  }
};

export const deleteEvent = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    console.log(`Event ${id} deleted`); // Debugging
  } catch (error) {
    console.error("Error deleting event:", error);
    throw error;
  }
};
