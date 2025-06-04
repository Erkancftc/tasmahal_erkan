const express = require("express");
const router = express.Router();

const {
  getRoomList
  

  
} = require("../controllers/rooms");

router.route("/").get(getRoomList);



module.exports = router;
