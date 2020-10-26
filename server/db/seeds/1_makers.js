
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('makers').del()
    .then(function () {
      // Inserts seed entries
      return knex('makers').insert([
        {name: 'FromSoft'},
        {name: 'Treyarch'},
        {name: 'Insomniac Games'}
      ]);
    });
};
