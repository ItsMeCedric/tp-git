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
