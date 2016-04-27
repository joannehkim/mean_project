var mongoose = require('mongoose');

var ListSchema = new mongoose.Schema({
	_user: String,
	name: String,
	desc: String,
	category: String,
	completed: Number,
	date: {type:Date, default:Date.now}

})

mongoose.model('List', ListSchema);