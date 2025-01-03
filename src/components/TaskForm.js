import React, { useState } from 'react';
import "./TaskForm.css";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState(''); 

  const handleSubmit = (e) => {
    if (title.trim()) {
      addTask(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
