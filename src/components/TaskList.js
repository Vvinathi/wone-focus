import React, { useState } from 'react';
import TaskItem from './TaskItem';
import FocusTimer from './FocusTimer'; 
import { useNavigate } from 'react-router-dom'; 

function TaskList() {
  
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const [newTask, setNewTask] = useState('');
  const [newPriority, setNewPriority] = useState('Medium'); 
  const [selectedTask, setSelectedTask] = useState(null);
  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
     
      setTasks([
        ...tasks,
        {
          text: newTask,
          completed: false,
          priority: newPriority,
          editing: false,
        },
      ]);
      
      setNewTask('');
      setNewPriority('Medium');
    }
  };
  


  const handleTaskInputChange = (e) => {
    setNewTask(e.target.value);
  };

  
  const handlePriorityChange = (e) => {
    setNewPriority(e.target.value);
  };

const handleEditTask = (taskToEdit, newText) => {
  
  if (newText.trim() === '') {
    return;
  }

  setTasks(
    tasks.map((task) =>
      task === taskToEdit ? { ...task, editing: false, text: newText } : task
    )
  );
};


// Event handler for completing a task
const handleCompleteTask = (taskToComplete) => {
  setTasks(
    tasks.map((task) =>
      task === taskToComplete ? { ...task, completed: !task.completed } : task
    )
  );
};


const handleDeleteTask = (taskToDelete) => {
  setTasks(tasks.filter((task) => task !== taskToDelete));
};
const handleSelectTask = (task) => {
  setSelectedTask(task);
  navigate(`/FocusTimer/${task.id}`, { state: { task } }); 
};

return (
  <div className="task-list">
    <h2>Task List</h2>

    <form onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={newTask}
        onChange={handleTaskInputChange}
      />
      <select value={newPriority} onChange={handlePriorityChange}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">Add</button>
    </form>

    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <TaskItem
            task={task}
            onEdit={handleEditTask}
            onComplete={handleCompleteTask}
            onDelete={handleDeleteTask}
            onSelect={handleSelectTask}
          />
        </li>
      ))}
    </ul>

   
    {selectedTask && <FocusTimer selectedTask={selectedTask} />}
  </div>
);
}

export default TaskList;