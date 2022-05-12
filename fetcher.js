const url = process.argv[2]
const outputPath = process.argv[3]

const fs = require('fs')
const request = require('request');

//http request

request(url, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(outputPath, body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${outputPath}`)
  });
  
});