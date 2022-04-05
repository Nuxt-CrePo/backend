const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ExperienceSchema = new Schema ({
	name: String,
	description: String,
	image: String,
	year: Number,
	duration: String,

});


module.exports = mongoose.model('Experience', ExperienceSchema);