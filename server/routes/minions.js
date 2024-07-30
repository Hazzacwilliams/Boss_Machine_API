const express = require('express');
const db = require('../db');
const minionRouter = express.Router();

minionRouter.get('/', (req, res) => {
    const minions = db.getAllFromDatabase('minions');
    res.status(200).send(minions);
});

minionRouter.post('/', (req, res) => {
    const newMinion = db.addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
})

minionRouter.get('/:minionId', (req, res) => {
    const minion = db.getFromDatabaseById('minions', req.params.minionId);
    if(minion){
        res.status(200).send(minion);
    } else {
        res.status(404).send();
    }
})

minionRouter.put('/:minionId', (req, res) => {
    const minionUpdate = db.updateInstanceInDatabase('minions', req.body);
    if(minionUpdate){
        res.status(200).send(minionUpdate);
    } else {
        res.status(404).send();
    }
})

minionRouter.delete('/:minionId', (req, res) => {
    const byeByeMinion = db.deleteFromDatabasebyId('minions', req.params.minionId);
    if(byeByeMinion){
        res.status(204).send(byeByeMinion);
    } else {
        res.status(404).send();
    }
})

module.exports = minionRouter;