// build your `/api/projects` router here
const express = require('express'); 
const Project = require('./model');
const helpers = require('../apiHelpers');

const router = express.Router();



router.get('/', async (req, res) => {
  try { 
    const allProjects = await Project.getAll();
    const formattedProjs = helpers.convertBool(allProjects);
    res.status(200).json(formattedProjs); 
  } catch (err) {
    res.status(500).json({ message: err.message }); 
  }
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