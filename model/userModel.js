const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please add a name"]
    },
    password: {
        type: String,
        required: [true, "Please add a name"]
    }
}, {
    timestamp: true
})

const User = mongoose.model('User', userSchema)

module.exports = User;

