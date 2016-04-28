var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

// set up a mongoose model
var UserSchema = new mongoose.Schema({
<<<<<<< HEAD

    name: String,
  	local: { email: String, password: String }
    
});
=======
	firstName: String,
	lastName: String,
	email: String,
	password: String,
	tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'List'}]
})
>>>>>>> 7a5f514e72db773d72fb3c44b505d0076372f5c8

// hash passwords
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', UserSchema);