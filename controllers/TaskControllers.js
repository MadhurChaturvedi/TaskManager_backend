const asyncHanler = require('express-async-handler')


const getTask = asyncHanler(async (req, res) => {
    res.json({ message: "Get Task" })
})

const postTask = async (req, res, next) => {
    try {
        const { name } = req.body;
        if (!name) {
            res.status(400); // Use 400 for Bad Request
            throw new Error("Add the Name");
        }

        res.status(200).json({ message: "Task" });
    } catch (error) {
        next(error); // Pass the error to the custom error handler
    }
};

const editTask = async (req, res) => {
    res.json({ message: `Edit Task ${req.params.id}` })
}

const deleteTask = async (req, res) => {

    res.json({ message: `Delete Task ${req.params.id}` })
}

module.exports = { getTask, postTask, editTask, deleteTask }