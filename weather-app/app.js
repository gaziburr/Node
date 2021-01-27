const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

// geocode('nagaon', (err, data) => {
//   if (err) {
//     console.log('Error !' + err)
//   } else {
//     console.log(data)
//   }
// })

forecast(65.23, 82.90, (err, data) => {
 if (err) {
  console.log('Error !' + err)
 } else {
  console.log(data)
 }
});