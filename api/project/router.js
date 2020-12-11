// build your `/api/projects` router here
const express = require('express'); 
const Project = require('./model');
const middleware = require('../middleware'); 

const router = express.Router();

router.get('/', middleware.convertProjBool, async (req, res) => {
  res.status(200).json(req.projects); 
});

router.post('/', async (req, res) => {
  try { 
    const newProject = await Project.create(req.body)
    res.status(200).json(newProject);
  } catch (err) {
    res.status(500).json({ message: err.message }); 
  }
}); 


module.exports = router;