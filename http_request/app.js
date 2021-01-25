const request = require('request')
const chalk = require('chalk')

const api = function(lat, lon, address) {
  //const url1 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=17f1dd0283743f2faf1cf56dbc16623e"
  const url = "http://api.weatherapi.com/v1/current.json?key=cbcc766178934c26b99161428212401&q=" + encodeURIComponent(address)
  const data = request({ url: url, json: true }, (error, response) => {
    if (error) {
      console.log("unable to connect whether services")
    } else if (response.body.error) {
      console.log('Unable to find the location')
    }
    else {
      const current = response.body
      //const weather = (`The place name is ${current.location.name} ,the region name is ${current.location.region} ,The longitude of this place is ${current.location.lon} , the lattitude is  ${current.location.lat} and localtime in hear is ${current.location.localtime} `)
      console.log(current)
    }
  })
}
//api(17.47,73.62,undefined)
api(undefined, undefined, "nagaon")


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