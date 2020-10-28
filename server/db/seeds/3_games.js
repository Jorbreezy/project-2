exports.seed = (knex) =>
  knex('games').del()
    .then(() =>
      knex('games').insert([
        {
          title: 'Dark Souls', price: 40, maker: 1, type: 1,
        },
        {
          title: 'Dark Souls 2', price: 40, maker: 1, type: 1,
        },
        {
          title: 'Black Ops 3', price: 40, maker: 2, type: 2,
        },
        {
          title: 'Cold War', price: 60, maker: 2, type: 2,
        },
        {
          title: 'Spider Man Miles Morales', price: 70, maker: 3, type: 3,
        },
        {
          title: 'Spider Man', price: 60, maker: 3, type: 3,
        },
      ]));
