const express = require("express");
const router = express.Router();

const {  updateRoom } = require("../controllers/updateRoom");

router.route("/").get(updateRoom);

module.exports = router;
