import React from "react";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { Link } from "react-router-dom";
import "./ChatbotPage.css";

// Import chatbot config, message parser, and action provider
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";

function ChatbotPage() {
  return (
    <div className="chatbot-container">
      <h2>💬 Event Assistant</h2>
      <Chatbot 
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      <Link to="/" className="back-btn">⬅ Back to Events</Link>
    </div>
  );
}

export default ChatbotPage;
