const express = require('express')
const bodyParser = require('body-parser')
const getNotes = require('./routes/getNotes')
const addNotes = require('./routes/addNotes')
const deleteNotes = require('./routes/deleteNotes')
const editNotes = require('./routes/editNotes')

const app = express()
app.use(bodyParser.json())
app.use(getNotes)
app.use(addNotes)
app.use(deleteNotes)
app.use(editNotes)

app.get('/', (req, res) => {
  res.send('hello world!')
})

app.listen(5400, () => {
  console.log(`server is listening on http://localhost:3900`);
})



