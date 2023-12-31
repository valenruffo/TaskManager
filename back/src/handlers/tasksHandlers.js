const { sequelize, Task, User } = require("../db");

const {
  createTaskDb,
  getAllTasksDb,
  deleteTaskDb,
} = require("../controllers/TaskController");

// Función para obtener todas las tareas
async function getTasksHandler(req, res) {
  // Implementa la lógica para obtener todas las tareas
  const { title } = req.query;
  try {
    if (title) {
      const response = await getAllTasksDb(title);
      return res.status(200).json(response);
    }
    const response = await getAllTasksDb();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Función para crear una nueva tarea
async function createTaskHandler(req, res) {
  // Implementa la lógica para crear una nueva tarea
  const { title, description } = req.body;
  try {
    const response = await createTaskDb(title, description);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Función para eliminar una tarea existente
async function deleteTaskHandler(req, res) {
  // Implementa la lógica para eliminar una tarea existente
  const { id } = req.params;
  try {
    await deleteTaskDb(id);
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
