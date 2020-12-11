const express = require('express'); 
const Resource = require('./model');

const router = express.Router();// build your `/api/resources` router here

router.get('/', async (req, res) => {
  try { 
    const resources = await Resource.getAll();
    res.status(200).json(resources); 
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}); 

router.post('/', async (req, res) => {
  try { 
    const addPost = await Resource.create(req.body); 
    res.status(200).json(addPost); 
  }catch (err) {
    res.status(500).json({ message: err.message });
  }
}); 

module.exports = router;
