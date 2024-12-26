const express = require('express')
const dotenv = require('dotenv').config()
const router = require('./routes/goalRoutes.js')
const colors = require('colors')
const connectDB = require('./db/db.js')
const app = express()
const { errorHandler } = require('./middleware/ErrorMiddleware.js')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

const PORT = process.env.PORT || 8080

app.use('/api/task', router)
app.use(errorHandler)
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);

})