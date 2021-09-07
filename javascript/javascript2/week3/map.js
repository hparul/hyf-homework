let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 55.68, lng: 12.50},

    zoom: 8,
  });
}