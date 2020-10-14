function isIdExist(dbTemp, id) {
    const index = dbTemp.findIndex((element) => {
        const matchResult = element.id == id
        return matchResult
    })
    return index >= 0
}
module.exports = isIdExist