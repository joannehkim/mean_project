// var users = require('./../controller/users.js');
var lists = require('./../controllers/lists.js');

var users = require('./../controllers/users.js');
// var posts = require('./../controller/post.js');
// var comments = require('./../controller/comment.js');

module.exports = function(app) {
	// GET ALL USERS
	// app.get('/users', function(req, res) {
	// 	users.show(req, res);
	// });

	// // FROM [LOGIN FACTORY] - LOGIN USER OR CREATE NEW USER
	// app.post('/login', function(req, res) {
	// 	users.find(req, res);
	// });

	// FROM [TOPIC FACTORY] - CREATE NEW TOPIC
	app.post('/addTask', function(req, res) {
		lists.create(req, res);
	});
	app.get('/tasks', function(req, res){
		lists.index(req, res);
	});
	app.post('/deleteTask', function(req, res){
		lists.delete(req,res);
	});
	app.post('/toggleTask', function(req, res){
		lists.toggle(req,res);
	});
	app.get('/editTask/:id', function(req, res){
		console.log(req.params);
		console.log(req.body);
		res.render('/edit_event', {taskId: req.params.id});
	})
	app.post('/findTask', function(req, res){
		lists.findOne(req,res);
	})
	app.post('/editTask', function(req, res){
		lists.update(req, res);
	})
	app.post('/register', function(req, res) {
        users.create(req,res);
    });

    app.post('/login', function(req, res) {
        users.index(req,res);
    });
}









