import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasksFromStorage, saveTasksToStorage } from "./utils/storage";
import "./styles/styles.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null); // État pour la tâche en édition

  useEffect(() => {
    setTasks(getTasksFromStorage());
  }, []);

  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);

  const addTask = (task) => {
    if (!task.name.trim() || !task.description.trim()) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setEditingTask(null); // Réinitialisation du mode édition
  };

  const deleteTask = (taskId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?")) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const cancelEdit = () => {
    setEditingTask(null); // Annuler l'édition en réinitialisant l'état
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} editingTask={editingTask} updateTask={updateTask} cancelEdit={cancelEdit} />
      <TaskList 
        tasks={tasks} 
        updateTask={updateTask} 
        deleteTask={deleteTask} 
        toggleTaskCompletion={toggleTaskCompletion} 
        setEditingTask={setEditingTask} 
      />
    </div>
  );
};

export default App;
