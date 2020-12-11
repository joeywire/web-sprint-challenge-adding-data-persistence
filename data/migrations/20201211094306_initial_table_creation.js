
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
    })
    .createTable('tasks', table => {
      table.increments('task_id'); 
      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id').inTable('projects')
        .onDelete('RESTRICT').onUpdate('RESTRICT'); 
      table.string('description', 128)
        .notNullable();
      table.string('notes', 440); 
      table.boolean('completed')
        .notNullable()
        .defaultTo(0);
    })
    .createTable('resources', table=> {
      table.increments('resource_id'); 
      table.string('name', 128)
        .unique()
        .notNullable(); 
      table.string('description', 128); 
    })
    .createTable('project_resources', table => {
      table.increments('id'); 
      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id').inTable('projects')
        .onDelete('RESTRICT').onUpdate('RESTRICT');
      table.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id').inTable('resources')
        .onDelete('RESTRICT').onUpdate('RESTRICT');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects'); 
};
