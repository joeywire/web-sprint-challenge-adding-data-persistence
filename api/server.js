// build your server here
const express = require('express'); 
const morgan = require('morgan'); 

//import routes:
const ProjectRouter = require('./project/router'); 
const ResourceRouter = require('./resource/router'); 
const TaskRouter = require('./task/router'); 

//Create our server applicatoin
const server = express();

//Globl Middleware
server.use(express.json()); 
server.use(morgan('tiny')); 
server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);
server.use('/api/tasks', TaskRouter); 

server.get('/', (_, res) => {
  res.status(200).json({ API: "UP AND RUNNINGGGGG!" }); 
});

module.exports = server;