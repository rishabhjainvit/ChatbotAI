import React, { useState, useEffect } from "react";
import Message from "../component/message";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [hovered, setHovered] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isListening, setIsListening] = useState(false); // Track listening state

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: "user" };
      const botResponse = { text: getBotResponse(input), sender: "bot" };

      setMessages([...messages, userMessage, botResponse]);
      setInput(""); // Clear the input field
    }
  };

  const getBotResponse = (message) => {
    if (message.toLowerCase().includes("hello")) {
      return "Hi! How can I assist you today?";
    } else if (message.toLowerCase().includes("bye")) {
      return "Goodbye! Have a great day!";
    } else {
      return "Sorry, I don't understand that.";
    }
  };

  // Speech recognition setup
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  const handleMicClick = () => {
    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
    }
  };

  useEffect(() => {
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript); // Set the spoken words as input
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  }, [recognition]);

  return (
    <div style={styles.container}>
      <Sidebar
        hovered={hovered}
        setHovered={setHovered}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div style={styles.chatContainer}>
        <div style={styles.chatWindow}>
          {messages.map((msg, index) => (
            <Message key={index} text={msg.text} sender={msg.sender} />
          ))}
        </div>
        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            style={styles.input}
          />
          <button onClick={handleSendMessage} style={styles.button}>
            Send
          </button>
          <button onClick={handleMicClick} style={styles.micButton}>
            {isListening ? "🎙️ Listening..." : "🎤"}
          </button>
        </div>
      </div>
    </div>
  );
};

const Sidebar = ({ hovered, setHovered, sidebarOpen, setSidebarOpen }) => {
  return (
    <div
      style={{
        ...styles.sidebar,
        width: sidebarOpen ? "250px" : "80px",
      }}
    >
      <div style={styles.headerContainer}>
        <h2 style={styles.header}>Menu</h2>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={styles.toggleButton}
        >
          {sidebarOpen ? "<" : ">"}
        </button>
      </div>
      <ul style={styles.menu}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            style={{
              ...styles.menuItem,
              ...(hovered === index && styles.menuItemHover),
              justifyContent: sidebarOpen ? "flex-start" : "center",
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <i className={item.icon} style={styles.icon}></i>
            {sidebarOpen && <span>{item.name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

const menuItems = [
  { name: "Profile", icon: "fas fa-user" },
  { name: "Settings", icon: "fas fa-cog" },
  { name: "Chat History", icon: "fas fa-history" },
  { name: "Help", icon: "fas fa-question-circle" },
];

const styles = {
  container: {
    display: "flex",
    height: "107vh",
  },
  sidebar: {
    height: "100vh",
    backgroundColor: "#1f1f1f",
    padding: "20px 10px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    boxShadow: "2px 0 10px rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
    transition: "width 0.3s ease-in-out",
    overflow: "hidden",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },
  header: {
    fontSize: "22px",
    letterSpacing: "1px",
    transition: "opacity 0.3s ease",
  },
  toggleButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
    outline: "none",
  },
  menu: {
    listStyleType: "none",
    padding: 0,
    flexGrow: 1,
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    margin: "15px 0",
    padding: "10px",
    backgroundColor: "#2e2e2e",
    borderRadius: "5px",
    cursor: "pointer",
    textAlign: "center",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    fontSize: "18px",
  },
  menuItemHover: {
    backgroundColor: "#007bff",
    transform: "scale(1.05)",
    boxShadow: "0 4px 15px rgba(0, 123, 255, 0.4)",
  },
  icon: {
    marginRight: "10px",
    fontSize: "20px",
    transition: "transform 0.3s ease",
  },
  chatContainer: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#2e2e2e",
    color: "#fff",
    borderRadius: "0px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    fontFamily: "'Arial', sans-serif",
    overflow: "hidden",
  },
  chatWindow: {
    flex: 1,
    overflowY: "auto",
    padding: "15px",
    backgroundColor: "#1f1f1f",
    border: "2px solid #444",
    borderRadius: "12px",
    marginBottom: "15px",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#333",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
    border: "2px solid #444",
  },
  input: {
    flex: 1,
    padding: "12px",
    backgroundColor: "#444",
    color: "#fff",
    border: "2px solid #007bff",
    borderRadius: "8px",
    fontSize: "16px",
    outline: "none",
    transition: "border-color 0.3s ease",
    marginRight: "10px",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  },
  micButton: {
    padding: "12px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "18px",
    marginLeft: "10px",
    outline: "none",
    transition: "background-color 0.3s ease",
  },
};

export default Chatbot;
