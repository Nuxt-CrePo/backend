const Express = require("express");
const BodyParser = require("body-parser");

var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
const port = 8000;

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://kevlin:kevlin123@cluster0.ojc14.mongodb.net/myFirstDatabase';

MongoClient.connect(url, (err, client) => {
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

  

app.listen(port, () => {
    console.log(`Le serveur tourne sur le port:${port}`);
});