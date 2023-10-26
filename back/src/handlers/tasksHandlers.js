const {
  createTaskDb,
  getAllTasksDb,
  deleteTaskDb,
} = require("../controllers/TaskController");

// Función para obtener todas las tareas
async function getTasksHandler(req, res) {
  // Implementa la lógica para obtener todas las tareas
  const { title, user_id } = req.query; // Añade user_id como argumento
  try {
    if (title) {
      const response = await getAllTasksDb(title, user_id); // Incluye user_id al obtener las tareas
      return res.status(200).json(response);
    }
    const response = await getAllTasksDb(user_id); // Incluye user_id al obtener las tareas
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Función para crear una nueva tarea
async function createTaskHandler(req, res) {
  // Implementa la lógica para crear una nueva tarea
  const { title, description, user_id } = req.body; // Añade user_id como argumento
  try {
    const response = await createTaskDb(title, description, user_id); // Incluye user_id al crear la tarea
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Función para eliminar una tarea existente
async function deleteTaskHandler(req, res) {
  // Implementa la lógica para eliminar una tarea existente
  const { id } = req.params;
  const { user_id } = req.body; // Añade user_id como argumento
  try {
    await deleteTaskDb(id, user_id); // Incluye user_id al eliminar la tarea
    res.status(200).send("Task deleted successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getTasksHandler,
  createTaskHandler,
  deleteTaskHandler,
};
