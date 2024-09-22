// // src/components/Sidebar.js
// import React, { useState } from "react";

// const Sidebar = () => {
//   const [hovered, setHovered] = useState(null); // To track which menu item is hovered

//   return (
//     <div style={styles.sidebar}>
//       <h2 style={styles.header}>Menu</h2>
//       <ul style={styles.menu}>
//         {menuItems.map((item, index) => (
//           <li
//             key={index}
//             style={{
//               ...styles.menuItem,
//               ...(hovered === index && styles.menuItemHover),
//             }}
//             onMouseEnter={() => setHovered(index)}
//             onMouseLeave={() => setHovered(null)}
//           >
//             <i className={item.icon} style={styles.icon}></i> {item.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const menuItems = [
//   { name: "Profile", icon: "fas fa-user" },
//   { name: "Settings", icon: "fas fa-cog" },
//   { name: "Chat History", icon: "fas fa-history" },
//   { name: "Help", icon: "fas fa-question-circle" },
// ];

// const styles = {
//   sidebar: {
//     position: "fixed", // Fixed on the left side
//     left: 0,
//     top: 0,
//     width: "250px",
//     height: "100vh", // Full height of the viewport
//     backgroundColor: "#1f1f1f", // Dark background for modern look
//     padding: "20px",
//     color: "#fff",
//     display: "flex",
//     flexDirection: "column",
//     boxShadow: "2px 0 10px rgba(0, 0, 0, 0.5)", // Darker shadow for depth
//     zIndex: 1000, // Keep it above other elements
//     transition: "width 0.3s ease", // Smooth transition on width changes
//   },
//   header: {
//     marginBottom: "30px",
//     textAlign: "center",
//     fontSize: "26px",
//     letterSpacing: "1.5px",
//     borderBottom: "2px solid #444", // Divider below the header
//     paddingBottom: "10px",
//     opacity: 0, // For fade-in animation
//     animation: "fadeIn 1s forwards", // Trigger fade-in on load
//   },
//   menu: {
//     listStyleType: "none",
//     padding: 0,
//     flexGrow: 1, // Make the menu take up the rest of the space
//   },
//   menuItem: {
//     margin: "15px 0",
//     padding: "12px",
//     backgroundColor: "#2e2e2e",
//     borderRadius: "8px",
//     cursor: "pointer",
//     textAlign: "center",
//     transition: "all 0.3s ease", // Smooth transition for hover effects
//     fontSize: "18px",
//     display: "flex",
//     alignItems: "center", // Align text with icon
//     justifyContent: "center",
//     opacity: 0, // For fade-in animation
//     transform: "translateX(-20px)", // Slide in from left
//     animation: "slideIn 0.5s forwards", // Trigger slide-in
//     animationDelay: "0.3s", // Delay for sequential animation effect
//   },
//   menuItemHover: {
//     backgroundColor: "#007bff", // Hover color
//     transform: "scale(1.05)", // Slight scaling effect on hover
//     boxShadow: "0 4px 15px rgba(0, 123, 255, 0.4)", // Shadow effect on hover
//   },
//   icon: {
//     marginRight: "10px",
//     fontSize: "20px",
//   },
// };

// // Global keyframe animations
// const globalStyles = `
//   @keyframes fadeIn {
//     from { opacity: 0; }
//     to { opacity: 1; }
//   }

//   @keyframes slideIn {
//     from { opacity: 0; transform: translateX(-20px); }
//     to { opacity: 1; transform: translateX(0); }
//   }

//   .menu-item:nth-child(1) { animation-delay: 0.2s; }
//   .menu-item:nth-child(2) { animation-delay: 0.4s; }
//   .menu-item:nth-child(3) { animation-delay: 0.6s; }
//   .menu-item:nth-child(4) { animation-delay: 0.8s; }
// `;

// // Dynamically insert global styles for animations
// const styleSheet = document.createElement("style");
// styleSheet.type = "text/css";
// styleSheet.innerText = globalStyles;
// document.head.appendChild(styleSheet);

// export default Sidebar;
