const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = require("./app");

dotenv.config({ path: `${__dirname}/config.env` });

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
		console.log("Error Connecting to the database");
	});

const port = 3000;
const server = app.listen(port || process.env.PORT, () => {
	console.log(`Server is running on PORT: ${port}`);
});

module.exports = app;
