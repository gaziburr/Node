const request = require('request')
const chalk = require('chalk')

const api = function(address) {
 const url = 'http://api.weatherapi.com/v1/current.json?key=a68dd5e882284af69dc130828211001&q='+address
 const data = request({ url: url, json: true }, (error, response) => {
  if (error) {
   console.log(chalk.red("unable to connect whether services"))
  } else if (response.body.error) {
   console.log(chalk.red.inverse('Unable to find the location'))
  }
  else {
   const current = response.body
   const weather = (`The place name is ${current.location.name} ,the region name is ${current.location.region} ,The longitude of this place is ${current.location.lon} , the lattitude is  ${current.location.lat} and localtime in hear is ${current.location.localtime} `)
   console.log(chalk.green(weather))
  }
 })
}
api('nagaon')
api('barpeta')
// const link = 'https://api.mapbox.com/geocoding/v5/mapbox.places/besamari,nagaon,assam.json?access_token=pk.eyJ1IjoiZ2F6aWJ1cjEyMyIsImEiOiJja2p0enlmbnc0NDIxMnpxb2VvYmNqbmZ5In0.0VpwHbnS4bcUz1Fgh21z6A'


// request({ url: link, json: true }, (err, res) => {
//  if (err) {
//   console.log(chalk.red("unable to connect to geocoding services"))
//  } else if (res.body.features.length===0) {
//   console.log(chalk.red('Un able to find the location in geocoding service'))
//  } else {
//       console.log(res.body.features[0])

//  }

// })