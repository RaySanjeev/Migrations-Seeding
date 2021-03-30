const axios = require("axios");

exports.getDogImage = async (req, res, next) => {
	try {
		const image = await axios({
			method: "GET",
			url: "https://dog.ceo/api/breeds/image/random",
		});

		res.locals.ImageUrl = image.data.message;
		next();
	} catch (err) {
		console.log(`Error: ${err}`);
	}
};
