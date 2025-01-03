import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import "./App.css"

const App = () => {
  const toggleTaskCompletion = (id) => {
    const task = tasks.find((task) => task.id === id);
    const updatedTask = { ...task, completed: !task.completed };

    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask),
    })
      .then((response) => response.json())
      .then((data) =>
        setTasks(tasks.map((task) => (task.id === id ? data : task)))
      );
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <TaskForm/>
      <TaskList
        tasks={tasks}
      />
    </div>
  );
};

export default App;
