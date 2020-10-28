exports.seed = (knex) =>
  knex('types').del()
    .then(() =>
      knex('types').insert([
        { name: 'RPG' },
        { name: 'FPS' },
        { name: 'Action' },
        { name: 'Adventure' },
        { name: 'Sports' },
        { name: 'Strategy' },
        { name: 'Indie' },
        { name: 'Racing' },
        { name: 'Simulation' },
      ]));
