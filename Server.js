const express = require('express')
const dotenv = require('dotenv').config()
const router = require('./routes/goalRoutes.js')

const app = express()
const PORT = process.env.PORT || 8080

app.use('/api/goals', router)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);

})