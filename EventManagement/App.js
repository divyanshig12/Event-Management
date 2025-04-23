import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Events from "./components/Events";
import EventForm from "./components/EventForm";
import Venues from "./components/Venues";
import Contact from "./components/Contact";
import ChatbotPage from "./pages/ChatbotPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  const [eventListUpdated, setEventListUpdated] = useState(false);

  const refreshEvents = () => setEventListUpdated((prev) => !prev);

  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Events */}
          <Route path="/events" element={<Events refresh={eventListUpdated} />} />
          <Route path="/events/new" element={<EventForm onEventAdded={refreshEvents} />} />
          <Route path="/events/edit/:id" element={<EventForm onEventAdded={refreshEvents} />} />

          {/* Other Pages */}
          <Route path="/venues" element={<Venues />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chatbot" element={<ChatbotPage />} />

          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
