import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';

// Animation for notification popup
const fadeInOut = keyframes`
  0% { top: -50px; opacity: 0; }
  10% { top: 20px; opacity: 1; }
  90% { top: 20px; opacity: 1; }
  100% { top: -50px; opacity: 0; }
`;

// Styled Components
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #121212;
  padding: 20px;
  position: relative;
`;

const TaskContainer = styled.div`
  background-color: #1e272e;
  padding: 30px;
  border-radius: 15px;
  width: 100%;
  max-width: 500px;
  color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  margin-top: 50px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  }
`;

const TaskHeader = styled.h3`
  color: #ff793f;
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`;

const TaskInput = styled.input`
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  border: none;
  background-color: #333;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    background-color: #444;
  }
`;

const TaskButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #ff793f;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-bottom: 15px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff6348;
  }
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TaskItem = styled.li`
  background: ${(props) => (props.completed ? '#28a745' : '#333')};
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  color: #ecf0f1;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s ease;

  &:hover {
    background: #444;
    cursor: pointer;
  }
`;

const TaskActions = styled.div`
  display: flex;
  gap: 10px;
`;

const TaskIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: ${(props) => (props.delete ? '#ff4d4d' : '#28a745')};
  }
`;

const TaskCount = styled.p`
  text-align: center;
  color: #ecf0f1;
  font-size: 1.2rem;
  margin-top: 20px;
`;

// Notification Popup styled component
const NotificationPopup = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #2ecc71;
  color: white;
  padding: 15px;
  border-radius: 5px;
  animation: ${fadeInOut} 4s ease;
  font-size: 1rem;
  z-index: 10;
`;

// TaskListComponent
const TaskListComponent = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  // Add a new task and show notification
  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput("");
      triggerNotification();
    }
  };

  // Toggle task completion
  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  // Remove task
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Trigger the notification popup for 3 seconds
  const triggerNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <PageContainer>
      {showNotification && <NotificationPopup>Task successfully added!</NotificationPopup>}

      <TaskContainer>
        <TaskHeader>Task List</TaskHeader>
        <TaskInput
          type="text"
          placeholder="Enter a new task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <TaskButton onClick={addTask}>Add Task</TaskButton>

        <TaskList>
          {tasks.map((task, index) => (
            <TaskItem key={index} completed={task.completed}>
              {task.text}
              <TaskActions>
                <TaskIcon onClick={() => toggleTaskCompletion(index)}>
                  <FaCheckCircle color={task.completed ? "#28a745" : "#fff"} />
                </TaskIcon>
                <TaskIcon delete onClick={() => removeTask(index)}>
                  <FaTrashAlt />
                </TaskIcon>
              </TaskActions>
            </TaskItem>
          ))}
        </TaskList>

        <TaskCount>Total Tasks: {tasks.length}</TaskCount>
      </TaskContainer>
    </PageContainer>
  );
};

export default TaskListComponent;
