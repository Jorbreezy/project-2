
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('makers').del()
    .then(function () {
      // Inserts seed entries
      return knex('makers').insert([
        {id: 1, name: 'FromSoft'},
        {id: 2, name: 'Treyarch'},
        {id: 3, name: 'Insomniac Games'}
      ]);
    });
};
