exports.seed = (knex) =>
  knex('makers').del()
    .then(() =>
      knex('makers').insert([
        { name: 'FromSoft' },
        { name: 'Treyarch' },
        { name: 'Insomniac Games' },
      ]));
