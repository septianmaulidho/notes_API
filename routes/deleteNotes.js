const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')
// const isIdExist = require('../isIdExist')

app.delete('/notes', (req, res) => {
    const query = req.query
    const id = query.id
    const parsedId = parseInt(id)
    const dbTemp = db.get()

    if (db.isIdExist(dbTemp, id)) {
        db.deleteFunc(id)
        res.send('Ok')
    } else {
        res.status(404).send(`The ID isn't available in database!`)
    }
})

module.exports = app