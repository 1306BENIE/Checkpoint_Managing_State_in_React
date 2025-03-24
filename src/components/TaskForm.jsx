import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, editingTask, updateTask, cancelEdit }) => {
  const [task, setTask] = useState({ name: "", description: "" });

  // Mettre à jour le formulaire si une tâche est en cours d'édition
  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    }
  }, [editingTask]);

  // Gestion du changement des champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  // Soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name.trim() || !task.description.trim()) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    if (editingTask) {
      updateTask(task); // Mise à jour de la tâche
    } else {
      addTask(task); // Ajout d'une nouvelle tâche
    }
    
    setTask({ name: "", description: "" }); // Réinitialisation du formulaire
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nom de la tâche"
        value={task.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">{editingTask ? "Modifier" : "Ajouter"} la tâche</button>
      {editingTask && <button type="button" onClick={cancelEdit}>Annuler</button>}
    </form>
  );
};

export default TaskForm;
