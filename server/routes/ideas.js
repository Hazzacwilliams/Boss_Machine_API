const express = require('express');
const db = require('../db');
const ideaRouter = express.Router();

ideaRouter.get('/', (req, res) => {
    const ideas = db.getAllFromDatabase('ideas');
    res.status(200).send(ideas);
})

ideaRouter.post('/', (req, res) => {
    const newIdea = db.addToDatabase('ideas', req.body);
    res.status(201).send(newIdea);
})

ideaRouter.get('/:ideaId', (req, res) => {
    const idea = db.getFromDatabaseById('ideas', req.params.ideaId);
    if(idea){
        res.status(200).send(idea);
    } else {
        res.status(404).send();
    }
})

ideaRouter.put('/:ideaId', (req, res) => {
    const updateIdea = db.updateInstanceInDatabase('ideas', req.body);
    if(updateIdea){
        res.status(200).send(updateIdea);
    } else {
        res.status(404).send();
    }
})

module.exports = ideaRouter;