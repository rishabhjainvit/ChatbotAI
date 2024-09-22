import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTimes, FaCalendarAlt, FaBook, FaChalkboardTeacher } from 'react-icons/fa';

// Styled Components for the Page Layout and Notification Section
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #121212;
  padding: 20px;
`;

const NotificationContainer = styled.div`
  background-color: #1e1e1e;
  padding: 30px;
  border-radius: 15px;
  width: 80%;
  max-width: 800px;
  color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  }
`;

const NotificationHeader = styled.h3`
  color: #f39c12;
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`;

const NotificationList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NotificationItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2c2c2c;
  padding: 15px;
  margin: 10px 0;
  border-radius: 10px;
  font-size: 1.2rem;
  color: #ecf0f1;
  transition: background 0.3s, transform 0.2s ease;

  &:hover {
    background: #333;
    transform: scale(1.02);
    cursor: pointer;
  }
`;

const NotificationMessage = styled.span`
  display: flex;
  align-items: center;
`;

const NotificationIcon = styled.span`
  margin-right: 10px;
  font-size: 1.5rem;
  color: #f39c12;
`;

const NotificationDate = styled.span`
  font-size: 0.9rem;
  color: #bdc3c7;
  margin-right: 15px;
`;

const DismissButton = styled.button`
  background: transparent;
  border: none;
  color: #e74c3c;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #ff6b6b;
  }
`;

// Component
const NotificationComponent = () => {
  const initialNotifications = [
    { id: 1, message: "Upcoming Fee Payment Deadline: Sep 30th", date: "Sep 25, 2024", icon: <FaCalendarAlt /> },
    { id: 2, message: "New Assignment Posted for Mathematics", date: "Sep 22, 2024", icon: <FaBook /> },
    { id: 3, message: "Student-Teacher Meeting on Oct 5th", date: "Sep 21, 2024", icon: <FaChalkboardTeacher /> },
  ];

  const [notifications, setNotifications] = useState(initialNotifications);

  const dismissNotification = (id) => {
    const updatedNotifications = notifications.filter(notification => notification.id !== id);
    setNotifications(updatedNotifications);
  };

  return (
    <PageContainer>
      <NotificationContainer>
        <NotificationHeader>Notifications</NotificationHeader>
        <NotificationList>
          {notifications.map((notification) => (
            <NotificationItem key={notification.id}>
              <NotificationMessage>
                <NotificationIcon>{notification.icon}</NotificationIcon>
                {notification.message}
              </NotificationMessage>
              <div>
                <NotificationDate>{notification.date}</NotificationDate>
                <DismissButton onClick={() => dismissNotification(notification.id)}>
                  <FaTimes />
                </DismissButton>
              </div>
            </NotificationItem>
          ))}
        </NotificationList>
      </NotificationContainer>
    </PageContainer>
  );
};

export default NotificationComponent;
