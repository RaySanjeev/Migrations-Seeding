const express = require("express");

const dogController = require("../controllers/dogController");
const viewController = require("../controllers/viewController");

const router = express.Router();

router.route("/").get(dogController.getDogImage, viewController.renderMain);

module.exports = router;
