const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const Play = sequelize.import('../models/play');

router.get('/', (req, res) => res.send('I love to play all day!'));

router.post('/new', (req, res) => {
    Play.create({
        nameOfHobby: req.body.nameOfHobby,
        duration: req.body.duration,
        funFactor: req.body.funFactor,
        withTeam: req.body.withTeam
    })
    .then(play => res.status(200).json(play))
    .catch(err => res.json(err))
})

module.exports = router;