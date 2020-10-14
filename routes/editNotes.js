const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')
// const isIdExist = require('../isIdExist')

app.patch('/notes', (req, res) => {
    const body = req.body
    const id = req.query.id
    const dbTemp = db.get()
    if (db.isIdExist(dbTemp, id)) {
        db.edit(id, body)
        res.send(body)
    } else {
        res.status(404).send(`The ID isn't available in database!`)
    }
})

module.exports = app