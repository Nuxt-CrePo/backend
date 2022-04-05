const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ExperienceSchema = new Schema ({
	name: String,
	description: String,
	image: String,
});


module.exports = mongoose.model('Experience', ExperienceSchema);