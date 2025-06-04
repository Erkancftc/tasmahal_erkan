const express = require("express");
const router = express.Router();


const { getReservationsList } = require("../controllers/reservations");

router.route("/").get(getReservationsList);

module.exports = router;
