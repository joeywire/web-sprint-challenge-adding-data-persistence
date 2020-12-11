// build your server here
const express = require('express'); 
const morgan = require('morgan'); 

//import routes:


//Create our server applicatoin
const server = express();

//Globl Middleware
server.use(express.json()); 
server.use(morgan('tiny')); 

server.get('/', (_, res) => {
  res.status(200).json({ API: "UP AND RUNNINGGGGG!" }); 
})

module.exports = server;