const express = require("express");
const dogController = require("../controllers/dogController");

const router = express.Router();

router.route("/").get(dogController.getDogImage);

module.exports = router;
