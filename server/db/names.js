const connection = require('./connection')

function getNames(db = connection) {
  return db('Names').select()
}

function addName(name, db = connection) {
  return db('Names').insert(name)
}

module.exports = {
  getNames,
  addName,
}
