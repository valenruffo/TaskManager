const { Router } = require("express");
const tasksRouter = require('./tasksRouter')
const mainRouter = Router();

mainRouter.use('/tasks', tasksRouter)


module.exports = mainRouter;
