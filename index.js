const axios=require("axios");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const url = require("url");
const querystring = require("querystring");
//routes
const rooms = require("./routes/rooms");
const updateRoom = require("./routes/updateRoom");
const reservations = require("./routes/reservations");
const calendar = require("./routes/calendar");

// middleware

app.use(express.static("./public"));
// use the created website on root
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use("/api/v1/rooms", rooms);
app.use("/api/v1/updateRoom", updateRoom);
app.use("/api/v1/reservations", reservations);
app.use("/api/v1/calendar", calendar);
//

 const port = process.env.PORT || 5000;


const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
//start server
start();
