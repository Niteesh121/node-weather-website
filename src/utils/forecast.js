const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/7253cb79c9dc53eb2545a337027c0abb/' + latitude + ' , ' + longitude
    
    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degree out. There is ${response.body.currently.precipProbability} % chance of rain. `)
        }
    })
}


module.exports = forecast