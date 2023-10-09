const { sequelize, Task, User } = require("../db");

const createTaskDb = async (title, description) => {
  const newTask = await Task.create({ title, description });
  return newTask;
};

const getAllTasksDb = async () => {
  return await Task.findAll();
};

const deleteTaskDb = async (id) => {
  await Task.destroy({ where: { id } });
};

module.exports = {
  createTaskDb,
  getAllTasksDb,
  deleteTaskDb,
};
