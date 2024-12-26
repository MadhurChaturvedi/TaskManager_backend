const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'please add a text value']
    }
}, {
    timestamps: true
})

const Task = mongoose.model("task", taskSchema)

module.exports = Task;