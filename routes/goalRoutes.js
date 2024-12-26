const express = require('express')
const { getTask, postTask, editTask, deleteTask } = require('../controllers/TaskControllers')

const router = express.Router()



router.route("/").get(getTask)
router.route("/post").post(postTask)
router.route("/:id").put(editTask)
router.route("/:id").delete(deleteTask)

module.exports = router;