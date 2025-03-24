import React from "react";

const TaskItem = ({ task, updateTask, deleteTask, toggleTaskCompletion, setEditingTask }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-content">
        <h3>{task.name}</h3>
        <p>{task.description}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => toggleTaskCompletion(task.id)}>
          {task.completed ? "✅ Complété" : "⏳ En cours"}
        </button>
        <button onClick={() => setEditingTask(task)}>✏️ Modifier</button>
        <button onClick={() => deleteTask(task.id)}>🗑 Supprimer</button>
      </div>
    </div>
  );
};

export default TaskItem;
