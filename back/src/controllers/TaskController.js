const { Op } = require("sequelize");
const { Task } = require("../db");
const axios = require("axios");

const deleteTaskDb = async (id) => {
  await Task.destroy({ where: { id } });
};

const createTaskDb = async (title, description) => {
  const newTask = await Task.create({ title, description });
  return newTask;
};
const getTasksDb = async (title) => {
    if (title) {
      const userByTitle = await Task.findAll({
        limit: 3,
        where: {
          title: { [Op.iLike]: '%' + title + '%' }
        }
      })
      return userByTitle
    }
    const allTasks = await Task.findAll()
    return allTasks
  }

  const getAllTasks = async (title) => {
    const tasksDB = await getTasksDb() // usuarios de la db
    const allTasks = [...tasksDB] // todos los usuarios
    if (title) {
      const filterTasks = allTasks.filter((task) =>
        task.title.toLowerCase().includes(title.toLowerCase())
      )
      if (filterTasks.length) {
        return filterTasks
      }
    } else {
      return allTasks
    }
  }

// POR ORDEN ASCENDENTE O DESCENDENTE
// const getUserDb = async () => {
//    const userByName = await User.findAll({
//      order: [["name", "ASC" ]]
//    });
//    return userByName;
//
// }

module.exports = {
  createTaskDb,
  getAllTasks,
  deleteTaskDb,
};
