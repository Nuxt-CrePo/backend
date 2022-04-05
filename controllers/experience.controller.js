const Experience = require ('../models/experience.model');

exports.createExperience = function(req, res) {
	let experience = new Experience(
			{
				name: req.body.name,
				description: req.body.description,
				image: req.body.image,
			}

		);
	experience.save((err) => {
		if(err) {
			console.log(err);
		}
		else {
			console.log("Experience created");
		}
		res.send(experience);
	});
}

exports.getExperiences = function(req, res) {
	Experience.find(function(err, experience){
		if(err){
			console.log(err);
		}
		res.send(experience);
	});
}

exports.updateExperience = function(req, res) {
	Experience.findByIdAndUpdate(req.params.id, req.body, function(err, experience){
		if(err){
			console.log(err);
		}
		res.send(experience);
	});
}

exports.deleteExperience = function(req, res) {
	Experience.findByIdAndDelete(req.params.id, function(err, experience){
		if(err){
			console.log(err);
		}
		res.send(experience);
	});
}

exports.detailExperience = function(req, res) {
	Experience.findById(req.params.id, function(err, experience){
		if(err){
			console.log(err);
		}
		res.send(experience);
	});
}