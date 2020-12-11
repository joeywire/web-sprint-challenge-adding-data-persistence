const db = require('../../data/dbConfig'); 

module.exports = {
  create(task) {
    return db('tasks').insert(task); 
  }
};// build your `Task` model here
