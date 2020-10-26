
exports.up = (knex) => {
  return knex.schema
    .createTable('makers', (table) => {
      table.increments().primary();
      table.string('name', 50).unique().notNullable();
    })
    .createTable('types', (table) => {
      table.increments().primary();
      table.string('name', 50).unique().notNullable();
    })
    .createTable('games', (table) => {
      table.increments().primary();
      table.string('title', 164).unique().notNullable();
      table.integer('price').notNullable();

      table
        .integer('type')
        .references('id')
        .inTable('types');

      table
        .integer('maker')
        .references('id')
        .inTable('makers'); 

    });
}

exports.down = (knex) => {
  return knex.schema
    .dropTable('makers')
    .dropTable('types')
    .dropTable('games');
}
