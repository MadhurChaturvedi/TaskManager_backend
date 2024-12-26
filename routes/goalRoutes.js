const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
    res.json({ message: "Get Task" })
})

router.post('/', async (req, res) => {
    res.json({ message: "Set New Task" })
})

router.put('/:id', async (req, res) => {
    res.json({ message: `Edit Task ${req.params.id}` })
})

router.delete('/:id', async (req, res) => {
    res.json({ message: `Delete Task ${req.params.id}` })
})
module.exports = router;