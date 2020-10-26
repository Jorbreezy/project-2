
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('types').del()
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([
        {id: 1, name: 'RPG'},
        {id: 2, name: 'FPS'},
        {id: 3, name: 'Action'},
        {id: 4, name: 'Adventure'},
        {id: 5, name: 'Sports'},
        {id: 6, name: 'Strategy'},
        {id: 7, name: 'Indie'},
        {id: 8, name: 'Racing'},
        {id: 9, name: 'Simulation'}
      ]);
    });
};
