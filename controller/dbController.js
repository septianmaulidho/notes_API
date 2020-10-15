const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ notes: [] })
    .write()

function get() {
    return db.get('notes')
        .value()
}

function getOne(id) {
    const parsedId = parseInt(id)
    return db.get('notes')
        .find({ id: parsedId })
        .value()
}

function add(body) {
    return db.get('notes')
        .push(body)
        .write()
}
function edit(id, body) {
    parsedId = parseInt(id)
    return db.get('notes')
        .find({ id: parsedId })
        .assign(body)
        .write()
}

function deleteFunc(id) {
    const parsedId = parseInt(id)
    return db.get('notes')
        .remove({ id: parsedId })
        .write()
}
function deleteAll() {
    return db.get('notes')
        .remove()
        .write()
}
function isIdExist(dbTemp, id) {
    const index = dbTemp.findIndex((element) => {
        const matchResult = element.id == id
        return matchResult
    })
    return index >= 0
}

module.exports = {
    get,
    add,
    edit,
    deleteFunc,
    isIdExist,
    getOne,
    deleteAll
}