import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "EventBot",
  initialMessages: [
    createChatBotMessage("👋 Hi! I’m EventBot. How can I assist you today?")
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#007bff",
    },
    chatButton: {
      backgroundColor: "#007bff",
    },
  }
};

export default config;
