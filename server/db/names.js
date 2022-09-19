const connection = require('./connection')

function getNames(auth0Id, db = connection) {
  console.log(auth0Id)
  return db('Names').select().where('auth0Id', auth0Id)
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
