const request = require('request');


//https://api.thecatapi.com/v1/breeds/search?q=


// Send request API to specific address
// as part of this goes name of breed
// in return recieve a string json object
// later need to handle
// what query paramaters to pass
// when request address recieve info about particular breed
let breed = process.argv[2];
let url = "https://api.thecatapi.com/v1/breeds/search?q=" + breed;



const fetchBreedDescription = function(breedName, callback) {
  request(url, function(err, res, body) {
    if (err) {
      console.log("Invalid URL");
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log("Breed not found.");
      } else {
        console.log(data[0].description);
      }
    }
  });

};


module.exports = { fetchBreedDescription };