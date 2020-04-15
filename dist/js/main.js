function initialize() {
  var latitude = new google.maps.LatLng(40.650002, -73.949997);
  var zoomCenter = {
    zoom: 2,
    center: latitude,
  };
  var map = new google.maps.Map(document.getElementById("map"), zoomCenter);

  var marker = new google.maps.Marker({
    position: lattitude,
    map: map,
    title: "festival location",
  });
}

google.maps.event.addDomListener(window, "load", initialize);
