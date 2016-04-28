var mongoose = require('mongoose');
var User = mongoose.model('User');
// var bcrypt = require('bcrypt');
// const saltRounds = 10;

module.exports = {

	index: function(req, res) {
		User.findOne({email: req.body.email, password:req.body.password}, function(err, results) {
			if(err) {
				console.log(err);
			} else {
				// console.log(results);
						console.log(results);
						res.json(results);


			}			
		})
	},
	create: function(req, res) {
		
		var encrypPW = "";

		console.log(req.body);

		if(req.body.password != req.body.confpw){
			res.json({Error: "Passwords do not match!"});
		} 
		else{




					console.log("User: " + req.body);

					User.create(req.body, function(err, results) {
						if(err){
							console.log(err);
						} else {
							res.json(results);
						}
					})

		}
	},
	remove: function(req, res) {
		User.remove({_id: req.params.id}).exec(function(){
    		res.json(200);
  		});
	}
}