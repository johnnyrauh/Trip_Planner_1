"use strict";

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiYnJhaW5vbWl0ZSIsImEiOiJjamQxd20wMm8xa25iMnFvNGh5cWZjcXFyIn0.EmncSI52lbTJJad3a2Ok8g";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});

module.exports = map

const { createActivityMarker, createRestaurantMarker, createHotelMarker } = require('./marker')


createHotelMarker(map,[-74.009, 40.705]);
