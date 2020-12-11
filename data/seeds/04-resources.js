exports.seed = function(knex) {
  return knex('resources').insert([
    {name: "React"},
    {name: "Computer"},
    {name: "Python"}
  ]); 
};
