// build your `Project` model here
const db = require('../../data/dbConfig'); 

module.exports = {
  getAll() {
    return db('projects'); 
  },
  create(proj) {
    return db('projects').insert(proj); 
  }
}