import React from 'react';
import "./TaskItem.css";

const TaskItem = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
        onClick={() => toggleTaskCompletion(task.id)}
      >
        {task.title}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
