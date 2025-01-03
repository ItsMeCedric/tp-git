import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import "./App.css"

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Charger les tâches au démarrage
  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data));
  });

    // Ajouter une tâche
    const addTask = (title) => {
      const newTask = { title, completed: false };
      fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask),
      })
        .then((response) => response.json())
        .then((data) => setTasks([...tasks, data]));
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
