const asyncHandler = require('express-async-handler');
const User = require('../model/userModel.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const registerUser = asyncHandler(async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.status(400)
            throw new Error('Please add all fields')
        }
        // Check if User exist
        const userExist = await User.findOne({ email })
        if (userExist) {
            res.status(400)
            throw new Error('User already exist')
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt)

        const user = await User.create({
            name,
            email,
            password: hashPassword
        })
        const newUser = await user.save();

        if (newUser) {
            res.status(201).json({
                _id: newUser.id,
                name: newUser.name,
                email: newUser.email
            })
        }
        else {
            res.status(400)
            throw new Error('Invalid Password or Email')
        }

    } catch (error) {
        next(error)
    }
})

const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Register user' })
})

const getUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Register user' })
})



module.exports = { registerUser, loginUser, getUser }