const axios = require("axios");



const getRoomList = (req, res) => {
 

  const options = {
    method: "GET",
    url: "https://app.hotelrunner.com/api/v2/apps/rooms?token=uBVoO8rfC1v8Z6P7Tbjh0XzTta5fKyDD2upttgHt&hr_id=849159843",
    headers: {
      accept: "application/json",
     "cache-control" :"no-cache"
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
  getRoomList

}; // export and object with functions
