const asyncHandler = require('express-async-handler');
const Task = require('../model/taskModel');


const getTask = asyncHandler(async (req, res) => {
    const allTask = await Task.find()
    res.json({ message: "Get Task", allTask })
})

const postTask = asyncHandler(async (req, res, next) => {
    try {
        const { text } = req.body;
        if (!text) {
            res.status(400); // Use 400 for Bad Request
            throw new Error("Add the Name");
        }
        const newTask = await Task({ text })
        const response = await newTask.save()
        res.status(200).json({ message: "Task", data: [response] });
    } catch (error) {
        next(error); // Pass the error to the custom error handler
    }
});

const editTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) {
        res.status(400)
        throw new Error('Task not Found')
    }
    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json({ message: `Task Edited Successfully 🐶`, data: [updateTask] })
}

const deleteTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) {
        res.status(400)
        throw new Error('Task not Found')
    }
    const deleteTask = await Task.findByIdAndDelete(req.params.id)
    res.json({ message: `Task Deleted Successfully 😆` })
}

module.exports = { getTask, postTask, editTask, deleteTask }