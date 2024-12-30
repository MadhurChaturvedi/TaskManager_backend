const asyncHandler = require('express-async-handler');
const Task = require('../model/taskModel.js');
const User = require('../model/userModel.js')

const getTask = asyncHandler(async (req, res) => {
    const allTask = await Task.find({ user: req.user.id })

    res.json({ message: "Get Task", allTask })
})

const postTask = asyncHandler(async (req, res, next) => {
    try {
        if (!req.body.text) {
            res.status(400); // Use 400 for Bad Request
            throw new Error("Add the Name");
        }
        const newTask = await Task({
            text: req.body.text,
            user: req.user.id
        })
        const response = await newTask.save()
        res.status(200).json({ message: "Task", data: [response] });
    } catch (error) {
        next(error); // Pass the error to the custom error handler
    }
});

const editTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            res.status(400)
            throw new Error('Task not Found')
        }
        // const user = await User.findById(req.user.id);
        // Check User
        if (!req.user) {
            res.status(401)
            throw new Error('User not found')
        }
        // make sure the logged in user match the goals user
        if (task.user.toString() !== req.user.id) {
            res.status(401)
            throw new Error("User not authorized")
        }
        const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json({ message: `Task Edited Successfully 🐶`, data: [updateTask] })
    } catch (error) {
        next(error)
    }
}

const deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            res.status(400)
            throw new Error('Task not Found')
        }

        // const user = await User.findById(req.user.id);
        // Check User
        if (!req.user) {
            res.status(401)
            throw new Error('User not found')
        }
        // make sure the logged in user match the goals user
        if (task.user.toString() !== req.user.id) {
            res.status(401)
            throw new Error("User not authorized")
        }
        await Task.findByIdAndDelete(req.params.id)
        res.json({ message: `Task Deleted Successfully 😆` })
    } catch (error) {
        next(error)
    }
}

module.exports = { getTask, postTask, editTask, deleteTask }