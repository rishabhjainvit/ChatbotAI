import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const HomePage = () => {
  return (
    <div style={styles.container}>
      {/* Header section */}
      <header style={styles.header}>
        <nav style={styles.navbar}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/" style={styles.navLink}>Home</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/chatbot" style={styles.navLink}>Chatbot</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/notifications" style={styles.navLink}>Notifications</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/profile" style={styles.navLink}>Profile</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/tasks" style={styles.navLink}>Tasks</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Welcome to CodeAI!</h1>
        <p style={styles.heroDescription}>
          Your personal assistant for managing chats, history, and more.
        </p>
        <Link to="/chat" style={styles.link}>
          <button style={styles.ctaButton}>Get Started</button>
        </Link>
      </section>

      <section style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>Features</h2>
        <div style={styles.featuresList}>
          {features.map((feature, index) => (
            <div key={index} style={styles.featureItem}>
              <i className={feature.icon} style={styles.featureIcon}></i>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.testimonialsSection}>
        <h2 style={styles.sectionTitle}>What Our Users Say</h2>
        <div style={styles.testimonialsList}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={styles.testimonialItem}>
              <p style={styles.testimonialText}>"{testimonial.text}"</p>
              <p style={styles.testimonialAuthor}>- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* New section: Latest Updates */}
      <section style={styles.updatesSection}>
        <h2 style={styles.sectionTitle}>Latest Updates</h2>
        <ul style={styles.updatesList}>
          {updates.map((update, index) => (
            <li key={index} style={styles.updateItem}>
              <h3 style={styles.updateTitle}>{update.title}</h3>
              <p style={styles.updateDate}>{update.date}</p>
              <p style={styles.updateDescription}>{update.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* New section: FAQs */}
      <section style={styles.faqSection}>
        <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div style={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>{faq.question}</h3>
              <p style={styles.faqAnswer}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Moved Contact Us section to the end */}
      <section style={styles.contactSection}>
        <h2 style={styles.sectionTitle}>Contact Us</h2>
        <p style={styles.contactDescription}>
          Have any questions? Reach out to us anytime!
        </p>
        <Link to="/contact" style={styles.link}>
          <button style={styles.ctaButton}>Contact Support</button>
        </Link>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2024 Your App. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Existing features and testimonials
const features = [
  {
    title: "Chat Bot",
    description: "Engage with our chatbot for quick assistance.",
    icon: "fas fa-comments",
  },
  {
    title: "Profile Management",
    description: "Update your profile and settings easily.",
    icon: "fas fa-user",
  },
  {
    title: "Chat History",
    description: "Review your chat history anytime.",
    icon: "fas fa-history",
  },
];

const testimonials = [
  { text: "This app is amazing! It has changed the way I manage my tasks.", author: "Jane Doe" },
  { text: "A fantastic assistant that simplifies my workflow.", author: "John Smith" },
  { text: "Highly recommend! The chatbot is incredibly helpful.", author: "Alice Johnson" },
];

// New content for latest updates
const updates = [
  {
    title: "New Feature: Voice Commands",
    date: "September 15, 2024",
    description: "You can now interact with the chatbot using voice commands for a seamless experience.",
  },
  {
    title: "Updated User Interface",
    date: "September 10, 2024",
    description: "We've redesigned our UI for better navigation and usability.",
  },
];

// New content for FAQs
const faqs = [
  {
    question: "How do I reset my password?",
    answer: "You can reset your password by clicking on 'Forgot Password' on the login page.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we prioritize your privacy and use advanced encryption methods to keep your data secure.",
  },
  {
    question: "Can I access the app on mobile?",
    answer: "Absolutely! Our app is fully responsive and can be accessed on any device.",
  },
];

const styles = {
  container: {
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#121212",
    color: "#e0e0e0",
    minHeight: "100vh",
  },
  // Header styles
  header: {
    padding: "10px 20px",
    backgroundColor: "#1f1f1f",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    marginBottom: "40px",
  },
  navbar: {
    width: "100%",
  },
  navList: {
    display: "flex",
    justifyContent: "space-around",
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  navItem: {
    margin: "0 10px",
  },
  navLink: {
    textDecoration: "none",
    color: "#e0e0e0",
    fontSize: "18px",
    fontWeight: "bold",
    transition: "color 0.3s",
  },
  heroSection: {
    textAlign: "center",
    padding: "50px 20px",
    backgroundColor: "#1f1f1f",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
    marginBottom: "40px",
  },
  heroTitle: {
    fontSize: "48px",
    marginBottom: "20px",
  },
  heroDescription: {
    fontSize: "20px",
    marginBottom: "30px",
  },
  link: {
    textDecoration: "none",
  },
  ctaButton: {
    padding: "15px 30px",
    fontSize: "18px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.2s",
    boxShadow: "0 2px 5px rgba(0, 123, 255, 0.5)",
  },
  featuresSection: {
    marginTop: "50px",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "32px",
    marginBottom: "30px",
    color: "#fff",
  },
  featuresList: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "0 10px",
  },
  featureItem: {
    textAlign: "center",
    maxWidth: "250px",
    margin: "20px",
    padding: "20px",
    backgroundColor: "#1f1f1f",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
  },
  featureIcon: {
    fontSize: "40px",
    marginBottom: "15px",
    color: "#007bff",
  },
  featureTitle: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  featureDescription: {
    fontSize: "16px",
  },
  testimonialsSection: {
    marginTop: "50px",
    textAlign: "center",
  },
  testimonialsList: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "0 10px",
  },
  testimonialItem: {
    maxWidth: "300px",
    margin: "20px",
    padding: "20px",
    backgroundColor: "#1f1f1f",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
  },
  testimonialText: {
    fontStyle: "italic",
    marginBottom: "10px",
  },
  testimonialAuthor: {
    fontWeight: "bold",
  },
  updatesSection: {
    marginTop: "50px",
    textAlign: "center",
  },
  updatesList: {
    listStyleType: "none",
    padding: 0,
  },
  updateItem: {
    backgroundColor: "#1f1f1f",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "600px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
  },
  updateTitle: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  updateDate: {
    fontSize: "14px",
    color: "#aaa",
  },
  updateDescription: {
    fontSize: "16px",
  },
  faqSection: {
    marginTop: "50px",
    textAlign: "center",
  },
  faqList: {
    padding: 0,
  },
  faqItem: {
    backgroundColor: "#1f1f1f",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "600px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
  },
  faqQuestion: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  faqAnswer: {
    fontSize: "16px",
    marginTop: "10px",
  },
  contactSection: {
    marginTop: "50px",
    textAlign: "center",
  },
  contactDescription: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  footer: {
    marginTop: "50px",
    textAlign: "center",
    padding: "10px 0",
    backgroundColor: "#1f1f1f",
    borderTop: "1px solid #333",
  },
};

export default HomePage;
