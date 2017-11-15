//Require https module
const https = require('https');
const api = require('./api.json');

//Function to print message to console
function printWeather(weather) {
  const message = `The temp in ${weather.current_observation.display_location.full} is ${weather.current_observation.temp_f}F`;
  console.log(message);
}

function get(query, state){
const request = 
https.get(`https://api.wunderground.com/api/ba18f5c5372870f6/conditions/q/ca/${query}.json`, response => {
                          let body = "";
                          // Read the data
                          response.on('data', data => {
                            body += data.toString();
                          });

                          response.on('end', () => {
                            // Parse the data
                            const weather = JSON.parse(body);                            
                            // Print the data
                            //printWeather(state)
                            console.log(query);
                          });
                          
                          
                          });
                        }

module.exports.get = get;