const express = require('express')
const { getTask, postTask, editTask, deleteTask } = require('../controllers/TaskControllers')

const TaskRouter = express.Router()



TaskRouter.route("/").get(getTask)
TaskRouter.route("/").post(postTask)
TaskRouter.route("/:id").put(editTask)
TaskRouter.route("/:id").delete(deleteTask)

module.exports = TaskRouter;