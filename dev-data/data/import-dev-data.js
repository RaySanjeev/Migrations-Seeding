const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../../models/userModel");

dotenv.config({ path: `${__dirname}/../../config.env` });

mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to the database");
	})
	.catch((err) => {
		console.log(err);
	});

const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, "utf-8"));

const importData = async () => {
	try {
		await User.create(users);
		console.log("Data uploaded successfully");
	} catch (err) {
		console.log("Error uploading data");
		console.log(`Error: ${err}`);
	}
	process.exit();
};

const deleteData = async () => {
	try {
		await User.deleteMany({});
		console.log("Data deleted successfully");
	} catch (err) {
		console.log("Error deleting data");
		console.log(`Error: ${err}`);
	}
	process.exit();
};

if (process.argv[2] === "--import") {
	importData();
}

if (process.argv[2] === "--delete") {
	deleteData();
}
