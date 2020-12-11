
exports.seed = function(knex) {
  return knex('projects').insert([
    {name: "Portfolio Page", description: "Show off your hard work!"},
    {name: "Conway's Game Of Life", description: "Everyone does this"}
  ]); 
};
