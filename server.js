const client = require('./api/config/config.js');
const express = require('express');
const app = express();

const apiRouter = require('./api/routes/api');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const models = require("./api/models");

// app.use('/api', apiRouter);

models.sequelize.sync().then(function(){
    console.log('Nice database looks fine');
}).catch(function(err){
    console.log(err, 'something went wrong with the database update');
});

app.listen(5000, function(){
    console.log('TASK MANAGEMENT API');
});

// client.connect();

module.exports = app;
