const express = require("express");
const router = express.Router();


const { getCalendar } = require("../controllers/calendar");

router.route("/").get(getCalendar);

module.exports = router;
