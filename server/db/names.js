const connection = require('./connection')

function getNames(db = connection) {
  return db('Names').select()
}

function addName(name, db = connection) {
  return db('Names').insert(name)
}

function delName()

module.exports = {
  getNames,
  addName,
}
