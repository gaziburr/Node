const request = require("request")
geocode = (address, callback,apl) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address)+ '.json?access_token=pk.eyJ1IjoiYXBwMTIiLCJhIjoiY2tqdTA3ZjdkMnhvdDJzbWo4eWVmcGFjYiJ9.IM9j_SWneL74gYhbe5sjUw'
  request({ url: apl, json: true }, (err, response) => {
    if (err) {
      callback("Cannot connect to geocoding service", undefined)
    } else if (response.body.error) {
      callback("Cannot find the location, please try another search", undefined)
    } else if (response.body.features==1) {
      if (response.body.features.length === 0) {
        callback("Cannot find the location, please try another search", undefined)
      }
    }
    else {
      if (response.body.features) {
        callback(undefined, response.body.features[0])
      } else if (response.body.location) {
        callback(undefined, response.body.location)
      }
    }
  })
  return {
    link:url
    
  }
}

module.exports = {
  geocode: geocode,
  link:geocode.link
}
