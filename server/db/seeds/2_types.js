exports.seed = (knex) =>
  // Deletes ALL existing entries
  knex('types').del()
    .then(() =>
      // Inserts seed entries
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
