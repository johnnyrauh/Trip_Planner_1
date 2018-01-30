"use strict";

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiYnJhaW5vbWl0ZSIsImEiOiJjamQxd20wMm8xa25iMnFvNGh5cWZjcXFyIn0.EmncSI52lbTJJad3a2Ok8g";

const map = require('./index')

const createMarker = (map, url, cords) => {
  const el = document.createElement('div');
  el.style.width = "32px";
  el.style.height = "39px";
  el.style.backgroundImage = `url(${url})`;

  return new mapboxgl
                .Marker(el)
                .setLngLat(cords)
                .addTo(map);
}

const createActivityMarker = (map, cords) => {
  const url = 'http://i.imgur.com/WbMOfMl.png'
  return createMarker( map, url, cords)
}

const createHotelMarker = (map, cords) => {
  const url = 'http://i.imgur.com/D9574Cu.png'
  return createMarker(map, url, cords)
}

const createRestaurantMarker = (map, cords) => {
  const url = 'http://i.imgur.com/cqR6pUI.png'
  return createMarker(map, url, cords)
}

module.exports = {
  createActivityMarker,
  createHotelMarker,
  createRestaurantMarker,
}
