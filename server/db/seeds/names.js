exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Names')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('Names').insert([])
    })
}
