const express = require('express');
const meetingsRouter = express.Router();
const db = require('../db');

meetingsRouter.get('/', (req, res) => {
    const allMeetings = db.getAllFromDatabase('meetings');
    res.status(200).send(allMeetings);
})

meetingsRouter.post('/', (req, res) => {
    const newMeeting = db.addToDatabase('meetings', db.createMeeting());
    res.status(201).send(newMeeting);

})

meetingsRouter.delete('/', (req, res) => {
    const byeByeMeeting = db.deleteAllFromDatabase('meetings');
    if(byeByeMeeting){
        res.status(204).send(byeByeMeeting);
    } else {
        res.status(404).send();
    }
})

module.exports = meetingsRouter;