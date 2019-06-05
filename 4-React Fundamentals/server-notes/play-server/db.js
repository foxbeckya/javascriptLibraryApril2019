const Sequelize = require('sequelize');
const sequelize = new Sequelize('playtabase', 'postgres', 'monkey1', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
.then(() => console.log('postgres db is connected'))
.catch(err => console.log(err));

module.exports = sequelize; 