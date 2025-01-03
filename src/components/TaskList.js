import React from 'react';
import TaskItem from './TaskItem';
import "./TaskList.css";

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          task={task}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
};

export default TaskList;
