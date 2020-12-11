const Project = require('./project/model'); 

const convertProjBool = async (req, res, next) => {
  try { 
    const projects = await Project.getAll(); 
    projects.forEach(project => {
      project.completed === 0 ? project.completed = false : project.complete = true;
    }); 
    req.projects = projects;
    next();
  } catch (err) {
    res.status(500).json({ message: err.message }); 
  }
}; 

module.exports = { 
  convertProjBool
}; 