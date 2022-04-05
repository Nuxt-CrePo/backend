const Skill = require ('../models/skill.model');

exports.createSkill = function(req, res) {
	let skill = new Skill(
			{
				name: req.body.name,
				description: req.body.description,
				image: req.body.image,
			}

		);
	skill.save((err) => {
		if(err) {
			console.log(err);
		}
		else {
			console.log("Skill created");
		}
		res.send(skill);
	});
}

exports.getSkills = function(req, res) {
	Skill.find(function(err, skill){
		if(err){
			console.log(err);
		}
		res.send(skill);
	});
}

exports.updateSkill = function(req, res) {
	Skill.findByIdAndUpdate(req.params.id, req.body, function(err, skill){
		if(err){
			console.log(err);
		}
		res.send(skill);
	});
}

exports.deleteSkill = function(req, res) {
	Skill.findByIdAndDelete(req.params.id, function(err, skill){
		if(err){
			console.log(err);
		}
		res.send(skill);
	});
}

exports.detailSkill = function(req, res) {
	Skill.findById(req.params.id, function(err, skill){
		if(err){
			console.log(err);
		}
		res.send(skill);
	});
}