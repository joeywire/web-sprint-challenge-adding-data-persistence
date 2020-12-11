const express = require('express'); 
const Task = require('./model');

const router = express.Router();// build your `/api/resources` router here

router.post('/', async (req, res) => {
  try { 
    const addedTask = await Task.create(req.body); 
    res.status(200).json(addedTask); 
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}); 


module.exports = router;