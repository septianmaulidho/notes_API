const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')
// const isIdExist = require('../isIdExist')

app.post('/notes', (req, res) => {
    const body = req.body
    const dbTemp = db.get()
    if (db.isIdExist(dbTemp, body.id)) {
        res.status(409).send(`You can't insert an object with same id!`)
    } else {
        db.add(body)
        res.send(body)
    }
})

module.exports = app