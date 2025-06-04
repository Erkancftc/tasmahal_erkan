const axios = require("axios");




const updateRoom = async (req,res) => {
  const options = {
    method: "PUT",
    url: "https://app.hotelrunner.com/api/v1/apps/rooms/~?hr_id=849159843&token=uBVoO8rfC1v8Z6P7Tbjh0XzTta5fKyDD2upttgHt&inv_code=HR:1044925&start_date=2025-04-02&end_date=2025-04-06&availability=1",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
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
 updateRoom

}; // export and object with functions
