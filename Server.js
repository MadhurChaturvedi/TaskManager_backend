const express = require('express')
const dotenv = require('dotenv').config()


const app = express()
const PORT = process.env.PORT || 8080

app.get('/api/goals', async (req, res) => {
    res.json({
        message: "Working",
    })
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);

})