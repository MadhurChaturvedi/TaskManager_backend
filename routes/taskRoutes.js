const express = require('express')
const { getTask, postTask, editTask, deleteTask } = require('../controllers/TaskControllers')
const { protect } = require('../middleware/authMiddleware')

const TaskRouter = express.Router()


TaskRouter.route("/").get(protect, getTask)
TaskRouter.route("/").post(protect, postTask)
TaskRouter.route("/:id").put(protect, editTask)
TaskRouter.route("/:id").delete(protect, deleteTask)

module.exports = TaskRouter;