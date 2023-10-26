const { Task } = require("../db");

const createTaskDb = async (title, description, user_id) => {
  // Añade user_id como argumento
  const newTask = await Task.create({ title, description, user_id }); // Incluye user_id al crear la tarea
  return newTask;
};

const getAllTasksDb = async (user_id) => {
  // Añade user_id como argumento
  return await Task.findAll({ where: { user_id } }); // Encuentra todas las tareas para el user_id específico
};

const deleteTaskDb = async (id, user_id) => {
  // Añade user_id como argumento
  await Task.destroy({ where: { id, user_id } }); // Borra la tarea con el id y user_id específicos
};

module.exports = {
  createTaskDb,
  getAllTasksDb,
  deleteTaskDb,
};
