var mongoose = require('mongoose');

var ListSchema = new mongoose.Schema({
	_user: String,
	topic: String,
	desc: String,
	category: String,
	posts: Number

})

mongoose.model('List', ListSchema);