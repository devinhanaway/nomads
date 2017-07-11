exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('title').notNullable();
    table.string('password');
    table.string('passwordConfirmation');
    table.string('location');
    table.string('email');
    table.string('image');
    table.timestamp('created_on').defaultTo(knex.fn.now())
    table.timestamp('updated_on').defaultTo(knex.fn.now())
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('users');
};
