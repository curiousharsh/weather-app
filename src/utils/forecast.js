const request = require('request')

const forecast = (latitude, longitude, callback) => {
   // console.log(latitude,longitude);
    const url = 'http://api.weatherstack.com/current?access_key=ce56fe9afa1e9d7e44676ea799674a9c&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
     //   console.log(body.current.temperature); return false;
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {

            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast