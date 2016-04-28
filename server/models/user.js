var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	password: String,
	tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'List'}]
})

mongoose.model('User', UserSchema);