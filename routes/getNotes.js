const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')

app.get('/notes', (req, res) => {
    const id = req.query.id
    if (id) {
        res.send(db.getOne(id))
    } else {
        res.send(db.get())
    }
})

module.exports = app