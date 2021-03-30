exports.renderMain = (req, res, next) => {
	res.status(200).render("main", {
		title: "Dog Images",
	});
};
