// var users = require('./../controller/users.js');
var lists = require('./../controller/lists.js');
// var posts = require('./../controller/post.js');
// var comments = require('./../controller/comment.js');

module.exports = function(app) {
	// GET ALL USERS
	app.get('/users', function(req, res) {
		users.show(req, res);
	});

	// FROM [LOGIN FACTORY] - LOGIN USER OR CREATE NEW USER
	app.post('/login', function(req, res) {
		users.find(req, res);
	});

	// FROM [TOPIC FACTORY] - CREATE NEW TOPIC
	app.post('/addTask', function(req, res) {
		lists.create(req, res);
	});


}









