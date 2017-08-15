$( window ).on( "load", function() {
  initMap();
});

$(document).ready(function(){
  $('.parallax').parallax();
});

$('#login').webuiPopover({url:'#login-form',placement:'bottom'});

function initMap() {

  var myLatlng = new google.maps.LatLng(-5.0920, -42.8037);

  var mapOptions = {
    zoom: 12,
    center: myLatlng,
  };
  
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var markers = locations.map(function(location) {
    return new google.maps.Marker({
      position: location,
    });
  });

  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  }

var locations = [
  {lat: -5.0920, lng: -42.8037},
  {lat: -5.143249, lng: -42.787652},
  {lat: -5.076181, lng: -42.751982}
]