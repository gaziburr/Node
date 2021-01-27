const forecast = require('./utils/forecast.js')

forecast.geocode("dhing assam", (err, data) => {
  if (err) {
    console.log("Error!" + err)
    console.log(forecast.link)
  } else {
    console.log(data)
  }
},'http://api.weatherapi.com/v1/current.json?key=a68dd5e882284af69dc130828211001&q=dhing'
)