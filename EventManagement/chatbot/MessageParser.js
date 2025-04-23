class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
        const lower = message.toLowerCase();
      
        if (lower.includes("event")) {
          this.actionProvider.handleEventQuery();
        } else if (lower.includes("gimmii")) {
          this.actionProvider.handleGimmiiQuery();
        } else if (lower.includes("time")) {
          this.actionProvider.handleTimeQuery();
        } else if (lower.includes("weather")) {
          this.actionProvider.handleWeatherQuery();
        } else if (lower.includes("joke")) {
          this.actionProvider.handleJokeQuery();
        } else {
          this.actionProvider.handleUnknownQuery();
        }
      }
      
  }
  
  export default MessageParser;
  