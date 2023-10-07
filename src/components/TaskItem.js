import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import FocusTimer from './FocusTimer';

function TaskItem({ task, onEdit, onComplete, onDelete, onSelect }) {
  const [editedText, setEditedText] = useState(task.text);
  const [showTimer, setShowTimer] = useState(false);

 
  const navigate = useNavigate();

  const handleStartFocus = () => {
    setShowTimer(true);
    navigate(`/FocusTimer/${task.id}`);
  };

  return (
    <div className="task-item">
      {task.editing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => onEdit(task)}>Edit</button>
          <button onClick={() => onComplete(task)}>Complete</button>
          <button onClick={() => onDelete(task)}>Delete</button>
          {showTimer && <FocusTimer selectedTask={task} />}
          {!showTimer && (
            <button onClick={handleStartFocus}>Start Focus</button>
          )}
        </>
      )}
    </div>
  );
}

export default TaskItem;
