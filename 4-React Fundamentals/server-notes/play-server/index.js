const express = require('express');
const app = express();
const playcontroller = require('./controllers/playcontroller');

const sequelize = require('./db');
const bodyParser = require('body-parser');

sequelize.sync();
app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));
app.get('/', (req, res)=> res.render('index'));

app.use('/play', playcontroller);

app.listen(3001, () => console.log('this says something'));

