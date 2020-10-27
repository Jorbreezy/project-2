exports.seed = (knex) =>
  // Deletes ALL existing entries
  knex('makers').del()
    .then(() =>
      // Inserts seed entries
      knex('makers').insert([
        { name: 'FromSoft' },
        { name: 'Treyarch' },
        { name: 'Insomniac Games' },
      ]));
