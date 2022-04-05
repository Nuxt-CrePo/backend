const express = require("express");
const BodyParser = require("body-parser");
var cors = require('cors');
const mongoose = require('mongoose');
const skillController = require ('./controllers/skill.controller.js');

var app = express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors());


const port = process.env.PORT || 8000;

const url = 'mongodb+srv://kevlin:kevlin@cluster0.tecwm.mongodb.net/portfolio?retryWrites=true&w=majority';

mongoose.connect(url, (err) => {
    if(err) {
		console.log('database not connected...');
	}
	else{
		console.log('database connected!');
	}
});

app.get('/', (req, res) => {
	res.send('Kevlix Backend');
});


// HTTP des skills
app.post('/api/v1/skill', skillController.createSkill);
app.get('/api/v1/skill', skillController.getSkills);
app.put('/api/v1/skill/:id', skillController.updateSkill);
app.delete('/api/v1/skill/:id', skillController.deleteSkill);
app.get('/api/v1/skill/:id', skillController.detailSkill);

  
// Se connecter sur la port 8000
app.listen(port, () => {
    console.log(`Le serveur tourne sur le port:${port}`);
});