// 📌 Fonction pour récupérer les tâches depuis le localStorage
export const getTasksFromStorage = () => {
  const storedTasks = localStorage.getItem("tasks"); // Récupérer les données
  return storedTasks ? JSON.parse(storedTasks) : []; // Convertir en tableau ou renvoyer un tableau vide
};

// 📌 Fonction pour sauvegarder les tâches dans le localStorage
export const saveTasksToStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Convertir en chaîne et sauvegarder
};
