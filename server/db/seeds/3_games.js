
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {id: 1, title: 'Dark Souls', price: 40, maker: 1, type: 1},
        {id: 2, title: 'Dark Souls 2', price: 40, maker: 1, type: 1},
        {id: 3, title: 'Black Ops 3', price: 40, maker: 2, type: 2},
        {id: 4, title: 'Cold War', price: 60, maker: 2, type: 2},
        {id: 5, title: 'Spider Man Miles Morales', price: 70, maker: 3, type: 3},
        {id: 6, title: 'Spider Man', price: 60, maker: 3, type: 3},
      ]);
    });
};
