
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
      table.increments('project_id'); 
      table.string('name', 128)
        .notNullable();
      table.string('description', 128); 
      table.boolean('completed')
        .notNullable()
        .defaultTo(0);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects'); 
};
