const axios = require('axios');
require("dotenv").config()
exports.sendMessage=(data)=>{
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + process.env.ACCESS_TOKEN
        }
    };
    axios.post('https://api.nexmo.com/v1/messages', data, config)
    .then((response) => {
       console.log(response)
    })
    .catch((error) => {
        console.error(error);
    });
}