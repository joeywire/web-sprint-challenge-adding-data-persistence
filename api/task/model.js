const db = require('../../data/dbConfig'); 

module.exports = {
  create(task) {
    return db('tasks').insert(task); 
  },
  getAll() {
    return db('tasks as t')
      .join('projects as p', 'p.project_id', 't.project_id')
      .select('t.description', 't.notes', 't.completed', 'p.name as projName', 'p.description as projDescription');
  }
};// build your `Task` model here
