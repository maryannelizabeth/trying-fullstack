exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Names')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('Names').insert([
        { id: 1, name: 'banana' },
        { id: 2, name: 'apple' },
        { id: 3, name: 'feijoa' },
      ])
    })
}
