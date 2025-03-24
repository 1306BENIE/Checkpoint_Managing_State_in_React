import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, updateTask, deleteTask, toggleTaskCompletion, setEditingTask }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>Aucune tâche pour le moment.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
            setEditingTask={setEditingTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
