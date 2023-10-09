const { Router } = require("express");
const router = Router();
const {
  getTasksHandler,
  createTaskHandler,
  deleteTaskHandler,
} = require("../handlers/tasksHandlers");

// Controlador para obtener todas las tareas
router.get("/", getTasksHandler);

// Controlador para crear una nueva tarea
router.post("/", createTaskHandler);

// Controlador para eliminar una tarea existente
router.delete("/:id", deleteTaskHandler);

module.exports = router;
