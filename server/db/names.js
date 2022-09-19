const connection = require('./connection')

function getNames(db = connection) {
  return db('Names').select()
}

function addName(name, db = connection) {
  return db('Names').insert(name)
}

function delName(id, db = connection) {
  console.log(id)
  return db('Names').where('id', id).delete()
}

module.exports = {
  getNames,
  addName,
  delName,
}
