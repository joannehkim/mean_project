var mongoose = require('mongoose');

var ListSchema = new mongoose.Schema({
	_user: String,
	name: String,
	desc: String,
	category: String,
	completed: String,
	date: Date

})

mongoose.model('List', ListSchema);