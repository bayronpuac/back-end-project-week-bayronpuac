
exports.up = function(knex) {
  return knex.schema 
  .createTable('notes', function(notes) {
      notes.increments();
      notes.string('title', 300).notNullable()
      notes.string('content',300).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('notes')
};
