const request = require("request")
geocode = (address, cb) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYXBwMTIiLCJhIjoiY2tqdTA3ZjdkMnhvdDJzbWo4eWVmcGFjYiJ9.IM9j_SWneL74gYhbe5sjUw&limit=1'

  request({ url: url, json: true }, (err, res) => {
    if (err) {
      cb('You are offline !', undefined)
    } else if (res.body.features.length === 0) {
      cb('location not found ! try another search', undefined)
    } else {
      cb(undefined, res.body)
    }
  })

}




module.exports = geocode