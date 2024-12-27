const express = require('express');
const { registerUser, loginUser, getUser } = require('../controllers/userControllers');

const userRouter = express.Router()


userRouter.route("/register").post(registerUser)
userRouter.route("/login").post(loginUser)
userRouter.route("/me").get(getUser)


module.exports = userRouter;