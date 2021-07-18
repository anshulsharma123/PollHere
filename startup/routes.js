const express = require('express')
const poll = require('../routes/poll');

module.exports = function(app)
{
   app.use(express.json());
   app.use(express.static("public"));
   app.use('/api/poll',poll);
}