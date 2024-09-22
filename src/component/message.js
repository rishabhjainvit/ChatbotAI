import React from "react";

const Message = ({ text, sender }) => {
  const isUser = sender === "user";

  return (
    <div
      style={{
        ...styles.message,
        ...(isUser ? styles.userMessage : styles.botMessage),
      }}
      className="message-container"
    >
      <p style={styles.text}>{text}</p>
    </div>
  );
};

const styles = {
  message: {
    padding: "8px 14px", // Reduced padding
    margin: "8px 0", // Reduced margin for smaller gaps
    borderRadius: "16px", // Slightly smaller border radius
    maxWidth: "65%", // Reduced max width for more compact look
    wordWrap: "break-word",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Slightly smaller shadow
    animation: "slideIn 0.4s ease-out",
    transition: "transform 0.3s ease",
    cursor: "pointer", // Add a pointer cursor on hover
  },
  userMessage: {
    backgroundColor: "#007bff",
    color: "white",
    alignSelf: "flex-end",
    textAlign: "right",
    marginLeft: "auto",
    border: "2px solid #0056b3",
  },
  botMessage: {
    backgroundColor: "#f1f1f1",
    color: "#333",
    alignSelf: "flex-start",
    textAlign: "left",
    border: "2px solid #ddd",
  },
  text: {
    fontSize: "14px", // Reduced text size slightly
    margin: 0,
    lineHeight: "1.4", // Slightly tighter line height
  },
};

// CSS animations
const globalStyles = `
  @keyframes slideIn {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  .message-container:hover {
    transform: scale(1.03); // Slightly smaller hover effect
    animation: pulse 0.5s ease;
  }
`;

// Dynamically add global CSS for animations
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = globalStyles;
document.head.appendChild(styleSheet);

export default Message;
