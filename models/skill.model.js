const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SkillSchema = new Schema ({
	name: String,
	description: String,
	image: String,
});


module.exports = mongoose.model('Skill', SkillSchema);