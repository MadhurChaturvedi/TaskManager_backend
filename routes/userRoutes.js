const express = require('express');
const { registerUser, loginUser, getUser } = require('../controllers/userControllers');
const { protect } = require('../middleware/authMiddleware');

const userRouter = express.Router()


userRouter.route("/register").post(registerUser)
userRouter.route("/login").post(loginUser)
userRouter.route("/me").get(protect,getUser)


module.exports = userRouter;