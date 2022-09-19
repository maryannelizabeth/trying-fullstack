exports.up = function (knex) {
  return knex.schema.createTable('Names', (table) => {
    table.increments('id')
    table.string('name')
    table.string('auth0Id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('Names')
}
