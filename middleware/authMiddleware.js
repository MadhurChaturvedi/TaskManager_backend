const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');

const protect = asyncHandler(async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // get Token form header
            token = req.headers.authorization.split(' ')[1]

            // verify token
            const secret = process.env.jwt_SECRET
            const decoded = jwt.verify(token, secret)
            // console.log(decoded);
            // get user form the token
            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            // console.log(error);
            res.status(400)
            throw new Error("Not authorized...")
        }
    }
    if (!token) {
        res.status(400)
        throw new Error('Not authorized, no token')
    }
})

module.exports = { protect }


