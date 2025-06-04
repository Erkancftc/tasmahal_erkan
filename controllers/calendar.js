const axios = require("axios");



const getCalendar = (req, res) => {
 

  const options = {
    method: "GET",
    url: "https://iznik-tas-mahal.hotelrunner.com/bv3/calendar",
    headers: {
      accept: "application/json",
      "cache-control": "no-cache",
    },
  };

  axios
    .request(options)
    .then((response) => {
      const contentType = response.headers["content-type"];
      const data = response.data;
      console.log(data);
      res.status(200).json({ data }); //send json object with success true and  array
    })
    .catch((err) => console.error(err));

  //GET
};

module.exports = {
  getCalendar
}; // export and object with functions
