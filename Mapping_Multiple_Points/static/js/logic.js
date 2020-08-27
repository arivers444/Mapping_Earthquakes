// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center over middle of USA.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// // Create the map object with a center and zoom level over Los Angeles, CA.
// let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// // An alternative to using the setView() method is to modify 
// // each attribute in the map object using the curly braces 
// // notation as follows:
// // Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });
// // This method is useful when we need to add multiple tile layers,
// // or a background image of our map(s), which we will do later in this module.

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
	console.log(city)
	L.circleMarker(city.location, {
        radius: city.population/100000
    })
	.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// We create the tile layer that will be the background of our map.
// See 13.2.4 "Use the Mapbox Styles API" for more info on other tile layers.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);