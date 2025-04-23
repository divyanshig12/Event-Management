class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleEventQuery = () => {
      const message = this.createChatBotMessage("📅 You can check all events on the Events Page.");
      this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    };
  
    handleUnknownQuery = () => {
      const message = this.createChatBotMessage("🤔 Sorry, I didn't understand that. Can you rephrase?");
      this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    };
  
    // 🕒 Time Handler
    handleTimeQuery = () => {
      const time = new Date().toLocaleTimeString();
      const msg = this.createChatBotMessage(`🕒 The current time is ${time}`);
      this.setState((prev) => ({ ...prev, messages: [...prev.messages, msg] }));
    };
  
    // ☁️ Weather Handler (Static Placeholder)
    handleWeatherQuery = () => {
      const msg = this.createChatBotMessage("☁️ Today's weather is sunny with a high of 28°C.");
      this.setState((prev) => ({ ...prev, messages: [...prev.messages, msg] }));
    };
  
    // 😂 Joke Handler
    handleJokeQuery = () => {
      const jokes = [
        "Why don’t scientists trust atoms? Because they make up everything!",
        "I'm reading a book on anti-gravity. It's impossible to put down!",
        "Why did the computer show up at work late? It had a hard drive!"
      ];
      const random = jokes[Math.floor(Math.random() * jokes.length)];
      const msg = this.createChatBotMessage(`😂 ${random}`);
      this.setState((prev) => ({ ...prev, messages: [...prev.messages, msg] }));
    };
  
    // Gimmii Handler (as you already had)
    handleGimmiiQuery = async () => {
      const loadingMsg = this.createChatBotMessage("🔍 Connecting to Gimmii...");
      this.setState((prev) => ({ ...prev, messages: [...prev.messages, loadingMsg] }));
  
      try {
        const dummyData = {
          title: "Sample Gimmii Result",
          description: "This is a placeholder response.",
        };
  
        const reply = this.createChatBotMessage(
          `✅ Gimmii Response:\n📌 ${dummyData.title}\n📝 ${dummyData.description}`
        );
  
        this.setState((prev) => ({ ...prev, messages: [...prev.messages, reply] }));
      } catch (error) {
        const errorMsg = this.createChatBotMessage("⚠️ Couldn't connect to Gimmii. Please try again.");
        this.setState((prev) => ({ ...prev, messages: [...prev.messages, errorMsg] }));
      }
    };
  }
  
  export default ActionProvider;
  