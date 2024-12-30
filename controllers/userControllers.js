const asyncHandler = require('express-async-handler');
const User = require('../model/userModel.js');
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/jwtToken.js')


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
                email: newUser.email,
                token: generateToken(newUser._id)
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

const loginUser = asyncHandler(async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Check for user email
        const user = await User.findOne({ email })
        if (user && (await bcrypt.compare(password, user.password))) {
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            })
        }
        else {
            res.status(400)
            throw new Error("User doesn't exist")
        }
    } catch (error) {
        next(error)
    }
})

const getUser = asyncHandler(async (req, res) => {
    // const { _id, name, email } = await User.findById(req.user.id)

    res.status(200).json(req.user)
})


module.exports = { registerUser, loginUser, getUser }