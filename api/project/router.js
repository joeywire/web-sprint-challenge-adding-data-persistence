// build your `/api/projects` router here
const express = require('express'); 
const Project = require('./model');


const router = express.Router();

const convertCompletedBool = (array) => {
  const workingArray = [...array]; 
  workingArray.forEach(item => {
    item.completed === 0 ? item.completed = false : item.completed = true;
  }); 
  return workingArray;
}; 

router.get('/', async (req, res) => {
  try { 
    const allProjects = await Project.getAll();
    const cleanedProjects = convertCompletedBool(allProjects);
    res.status(200).json(cleanedProjects); 
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