// build your `Resource` model here
const db = require('../../data/dbConfig'); 

module.exports = {
  getAll() {
    return db('resources');
  }, 
  create(resource) { 
    return db('resources').insert(resource); 
  }
};