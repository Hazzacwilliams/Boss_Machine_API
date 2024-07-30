const express = require('express');
const database = require('db.js');
const { getAllFromDatabase } = require('./db');
const minionRouter = express.Router();

minionRouter.get('/api/minions', (req, res, next) => {
    res.send(getAllFromDatabase(minions));
});

minionRouter.post('/api/minions', (req, res, next) => {
    
})

module.exports = minionRouter;