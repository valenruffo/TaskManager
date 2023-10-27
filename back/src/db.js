const { Sequelize } = require("sequelize");
require("dotenv").config();

const TaskModel = require("./models/Task");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
);

TaskModel(sequelize);

module.exports = {
  ...sequelize.models,
  sequelize,
};
