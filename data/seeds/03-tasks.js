exports.seed = function(knex) {
  return knex('tasks').insert([
    {project_id: 1, description: "Make site map", notes: "Include all pages in map - dont' skimp on planning!"},
    {project_id: 1, description: "Write some Code", notes: "Do this until you're done"},
    {project_id: 2, description: "Be super basic", notes: "See what everyone else is doing."},
    {project_id: 2, description: "Copy Pasta", notes: "What skill are you exhibiting here?"}
  ]); 
};
