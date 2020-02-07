const express = require('express'); // imports express package
const server = express(); // creates server
const actionRouter = require('../data/helpers/actionRouter');
const projectRouter = require('../data/helpers/projectRouter');

server.use(express.json())
server.use('/api/helpers/actions', actionRouter);
server.use('/api/helpers', projectRouter);

module.exports = server;


