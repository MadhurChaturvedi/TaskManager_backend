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
    res.json({ message: `Edit Task ${req.params.id}` })
}

const deleteTask = async (req, res) => {

    res.json({ message: `Delete Task ${req.params.id}` })
}

module.exports = { getTask, postTask, editTask, deleteTask }