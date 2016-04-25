var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	password: String}
	{timestamps: {createdAt: 'created_at'}

})

mongoose.model('User', UserSchema);