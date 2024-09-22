import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../src/component/Homepage";  // Import your HomePage component
import Chatbot from "../src/component/chatbot";    // Import your Chatbot component
import NotificationComponent from "../src/component/NotificationComponent";  // Import the Notification component
import ProfileCard from "../src/component/ProfileCard";  // Import the ProfileCard component
import TaskListComponent from "../src/component/TaskListComponent";  // Import the TaskList component

const App = () => {
  return (
    <Router>
      <div>
        {/* Define routes for different pages */}
        <Routes>
          {/* Homepage route */}
          <Route path="/" element={<HomePage />} />

          {/* Chatbot route */}
          <Route path="/chat" element={<Chatbot />} />

          {/* NotificationComponent route */}
          <Route path="/notifications" element={<NotificationComponent />} />

          {/* ProfileCard route */}
          <Route path="/profile" element={<ProfileCard />} />

          {/* TaskListComponent route */}
          <Route path="/tasks" element={<TaskListComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
