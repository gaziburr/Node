 const request = require('request')


 const forecast = (lat, lon, cb) => {
  const url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=17f1dd0283743f2faf1cf56dbc16623e&limit=1"
  request({ url: url, json: true }, (err, res) => {
   if (err) {
    cb('you are offline', undefined)
   } else {
    cb(undefined, res.body.current)
   }

  })
 }
 module.exports = forecast