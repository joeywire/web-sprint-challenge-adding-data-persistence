// build your server here
const express = require('express'); 
const morgan = require('morgan'); 

//import routes:
const ProjectRouter = require('./project/router'); 

//Create our server applicatoin
const server = express();

//Globl Middleware
server.use(express.json()); 
server.use(morgan('tiny')); 
server.use('/api/projects', ProjectRouter);

server.get('/', (_, res) => {
  res.status(200).json({ API: "UP AND RUNNINGGGGG!" }); 
});

module.exports = server;