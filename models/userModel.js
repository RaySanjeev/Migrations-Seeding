const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please provide the name of the user"],
		trim: true,
	},
	email: {
		type: String,
		required: [true, "Please provide the email of the user"],
		trim: true,
	},
	password: {
		type: String,
		minlength: 7,
	},
	address: {
		place: String,
		district: String,
		state: String,
	},
	role: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
